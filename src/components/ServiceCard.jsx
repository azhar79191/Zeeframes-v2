import { ArrowUpRight } from "lucide-react";

const ServiceCard = ({ tag, title, image }) => {
  return (
    <div className="group  relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-black to-[#0a0a0a] transition-all duration-700 hover:border-l-2 hover:border-white/10 hover:px-8">

      {/* Sliding Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute right-12 w-54 h-42 -translate-x-6 opacity-0 transition-all duration-700 group-hover:translate-x-0 group-hover:opacity-100"
        />
      )}

      {/* Text Wrapper (moves RIGHT on hover) */}
      <div className="transition-transform py-10 duration-700 group-hover:translate-x-3">
        <p className="text-lg leading-7 uppercase tracking-widest text-[#E7E7E7]">
          {tag}
        </p>

        <h3 className="pt-5 text-[28px] font-medium  text-white">
          {title}
        </h3>
      </div>

      {/* Arrow (moves LEFT on hover) */}
      <div className="absolute right-3 top-15 transition-transform duration-300 group-hover:-translate-x-13">
        <div className="flex p-3 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:bg-white">
          <ArrowUpRight className="text-white transition-colors duration-300 group-hover:text-black" />
        </div>
      </div>

    </div>
  );
};

export default ServiceCard;
