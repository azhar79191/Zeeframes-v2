import { useEffect } from "react";

export default function CursorGlow() {
    useEffect(() => {
        const glow = document.getElementById("cursor-glow");

        const moveGlow = (e) => {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        window.addEventListener("mousemove", moveGlow);
        return () => window.removeEventListener("mousemove", moveGlow);
    }, []);

    return <div id="cursor-glow" />;
}
