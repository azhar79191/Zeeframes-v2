import { useState } from "react";


export default function useHome() {
    const [activeIndex, setActiveIndex] = useState(0);


    const toggle = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return {
        activeIndex,
        toggle
    }
}