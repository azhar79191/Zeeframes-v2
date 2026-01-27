import { Button } from '@/components/ui/button'
import React from 'react'
import gif from "@/assets/images/spining-star-BHYjMLGF.gif"
import bg from "@/assets/images/gradient-bg.webp"
import { Arrowup1 } from '@/assets/images'

const DesignSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat py-24"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="container flex items-center justify-between">
                <div>
                    <h2 className="text-[70px] ff_geologica max-w-4xl font-bold text-white leading-21">
                        Design That Thinks. Interfaces That Feel.
                    </h2>

                    <p className="mt-4 text-lg leading-7 max-w-2xl text-gray-300">
                        At ZeeFrames, we craft AI-ready design systems for modern software responsive, scalable, and human-centered.
                    </p>

                    <Button variant="default" size="default" className="relative group mt-6">
                        <span className="flex items-center gap-3 justify-center transition-opacity group-hover:opacity-0">
                            See AI in Action
                            <Arrowup1/>
                        </span>

                        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
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
