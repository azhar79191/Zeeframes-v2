import React from "react";
import { ArrowUpRight } from "lucide-react";

const ShowcaseCard = ({
    image,
    title,
    description,
    className,
}) => {
    return (
        <div className={`group ${className}`}>
            <div className="relative overflow-hidden rounded-2xl bg-black">
                <img
                    src={image}
                    alt={title}
                    className="sm:h-170 h-[414px] sm:w-150 w-full object-cover"
                />
            </div>

            <div className="mt-4">
                <h3 className="text-sm font-normal mt-6 text-white">
                    {title}
                </h3>
                <div className="flex items-center justify-between mt-2">
                <p className=" sm:text-2xl text-lg text-white font-medium w-100">
                    {description}
                </p>
                    <span className="flex p-1 items-center justify-center w-5 h-5 shrink-0 rounded-full border border-[#B8B8B8] ">
                        <ArrowUpRight className="text-white" />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ShowcaseCard;
