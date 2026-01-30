// src/components/WhatsAppFloatingButton.jsx
import React from "react";
import { WhatsappWave } from "@/assets/images";

const WhatsAppFloatingButton = () => {
    return (
        <div className="whatsapp-wrapper">
            <div className="video-main">
                <div className="waves-block">
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                </div>

                <a
                    href="https://wa.me/+92 320 3244280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn"
                    aria-label="Chat on WhatsApp"
                >
                    <span className="bg-[#2E3000] rounded-full p-3.5 border-0 outline-0"><WhatsappWave /></span>
                                    </a>
            </div>
        </div>
    );
};

export default WhatsAppFloatingButton;
