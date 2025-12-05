"use client";

import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(true);
    const [showNotification, setShowNotification] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (!isMobile) {
            // Desktop: Show notification for 5s
            const timer = setTimeout(() => setShowNotification(true), 1000); // Delay slightly
            const hideTimer = setTimeout(() => setShowNotification(false), 6000); // Hide after 5s (1+5)
            return () => {
                clearTimeout(timer);
                clearTimeout(hideTimer);
            };
        } else {
            setShowNotification(false);
        }
    }, [isMobile]);

    useEffect(() => {
        if (!isMobile) {
            setIsVisible(true);
            return;
        }

        const handleScroll = () => {
            // Mobile logic: Hide on scroll, show at bottom
            const scrolledToBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

            if (window.scrollY > 100 && !scrolledToBottom) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isMobile]);

    return (
        <div
            className={`fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 transition-opacity duration-300 ${isVisible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        >
            {showNotification && (
                <div className="bg-white text-black text-sm font-medium px-4 py-2 rounded-lg shadow-lg mb-2 relative animate-in fade-in slide-in-from-bottom-2 max-w-[200px] text-center">
                    Jetzt unkompliziert über Whatsapp Beraten Lassen.
                    <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white transform rotate-45"></div>
                </div>
            )}
            <a
                href="https://wa.me/41765875055"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white p-4 rounded-full shadow-xl hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                aria-label="WhatsApp Chat"
            >
                <MessageCircle size={32} />
            </a>
        </div>
    );
}
