import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
    const navigate = useNavigate();

    const targetPos = useRef({ x: 0, y: 0 });
    const currentPos = useRef({ x: 0, y: 0 });
    const buttonRef = useRef(null);

    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const animate = () => {
            currentPos.current.x += (targetPos.current.x - currentPos.current.x) * 0.12;
            currentPos.current.y += (targetPos.current.y - currentPos.current.y) * 0.12;

            if (buttonRef.current) {
                buttonRef.current.style.transform = `
          translate(${currentPos.current.x}px, ${currentPos.current.y}px)
          translate(-50%, -50%)
        `;
            }

            requestAnimationFrame(animate);
        };

        animate();
    }, []);

    return (
        <section
            className="relative w-full h-auto mb-20 overflow-hidden cursor-none"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                targetPos.current = {
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top,
                };
            }}
        >
            <video
                src="/video/mainvideo-CmL3Olfo.mp4"
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />

            {/* Floating Cursor Button */}
            <Button
            variant="desturctive"
                ref={buttonRef}
                onClick={() => navigate("/contact")}
                className={`pointer-events-auto absolute top-0 left-0
          bg-white text-black rounded-3xl px-6 py-4
          flex items-center gap-2
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
            >
                All Works
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                >
                    <path
                        d="M14.5833 5.4165L5 14.9998"
                        stroke="#0B0B0B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.66669 5H15V13.3333"
                        stroke="#0B0B0B"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </Button>
        </section>
    );
};

export default VideoSection;
