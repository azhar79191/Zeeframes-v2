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
            <h2 className={`text-[#FFF] text-[40px] font-['Geologica'] font-bold leading-10 ${titleclassName}`}>
                {title}
            </h2>

            {/* Description */}
            <p className={`text-sm leading-5 text-[#D5D5D5] max-w-[600px] ${descriptionclassName}`}>
                {description}
            </p>
        </div>
    );
};

export default SectionHeader;
