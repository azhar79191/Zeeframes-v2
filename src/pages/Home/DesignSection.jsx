import { Button } from '@/components/ui/button'
import React from 'react'
import gif from "@/assets/images/spining-star-BHYjMLGF.gif"
import bg from "@/assets/images/gradient-bg.webp"

const DesignSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-24"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container flex items-center justify-between">
                <div>
                    <h2 className="text-7xl max-w-4xl font-bold text-white leading-21">
                        Design That Thinks. Interfaces That Feel.
                    </h2>

                    <p className="mt-4 text-lg leading-7 max-w-2xl text-gray-300">
                        At ZeeFrames, we craft AI-ready design systems for modern software responsive, scalable, and human-centered.
                    </p>

                    <Button className="mt-6 h-12 w-41">
                        <span className="group-hover:hidden flex items-center gap-3 justify-center">
                            See AI in Action
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M14.5833 5.4165L5 14.9998" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M6.66669 5H15V13.3333" stroke="#0B0B0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>

                        <span className="hidden group-hover:block">
                            Let’s talk
                        </span>
                    </Button>
                </div>
                    <img src={gif} alt="star" className="w-110 h-110" />
            
            </div>
        </section>
    )
}

export default DesignSection
