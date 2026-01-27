import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Arrowup1 } from "@/assets/images";

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
                variant="destructive"
                size="destructive"
                ref={buttonRef}
                onClick={() => navigate("/contact")}
                className={`pointer-events-auto absolute top-0 left-0
          transition-opacity duration-300
          ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
            >
                All Works
                <Arrowup1/>    
            </Button>
        </section>
    );
};

export default VideoSection;
