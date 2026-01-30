const SectionHeader = ({
    eyebrow,
    title,
    description,
    titleclassName="",
    descriptionclassName="",
    align = "center",
}) => {
    return (
        <div
            className={`flex flex-col gap-4 ${align === "center"
                    ? "items-center text-center"
                    : "items-start text-left"
                }`}
        >
            {/* Eyebrow text */}
            <p className="text-sm font-['Geologica'] font-medium uppercase text-[#F3FE00]">
                {eyebrow}
            </p>

            {/* Title */}
            <h2 className={`text-[#FFF] sm:text-[40px] text-[28px] font-['Geologica'] font-bold leading-10 ${titleclassName}`}>
                {title}
            </h2>

            {/* Description */}
            <p className={`text-sm leading-5 text-[#D5D5D5] sm:max-w-[600px] max-w-[327px] ${descriptionclassName}`}>
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;
