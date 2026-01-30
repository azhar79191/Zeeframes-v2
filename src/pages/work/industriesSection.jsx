import { useState } from "react";
import ShowCaseCards from "../Home/ShowCaseCards";

const industriesData = [
  { id: 1, title: "All Niches", content: <ShowCaseCards/> },
  { id: 2, title: "AI", content: <ShowCaseCards /> },
  { id: 3, title: "Enterprise", content: <ShowCaseCards /> },
  { id: 4, title: "Fin-Tech", content: <ShowCaseCards /> },
  { id: 5, title: "SaaS", content: <ShowCaseCards /> },
  { id: 6, title: "Crypto & Web3", content: <ShowCaseCards /> },
  { id: 7, title: "Automotive", content: <ShowCaseCards /> },
  { id: 8, title: "Ed-Tech", content: <ShowCaseCards /> },
  { id: 9, title: "Mar-Tech", content: <ShowCaseCards /> },
  { id: 10, title: "IT/Consulting", content: <ShowCaseCards /> },
  { id: 11, title: "Health Tech", content: <ShowCaseCards /> },
  { id: 12, title: "E-Commerce", content: <ShowCaseCards /> },
  { id: 13, title: "Construction Tech", content: <ShowCaseCards /> },
  { id: 14, title: "Legal Tech", content: <ShowCaseCards /> },
  { id: 15, title: "Freight & Logistics", content: <ShowCaseCards /> },
  { id: 16, title: "Social Media", content: <ShowCaseCards /> },
];

const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState(industriesData[0].id);

  const activeContent = industriesData.find(
    (item) => item.id === activeTab
  );

  return (
    <section className="sm:py-20 py-8 bg-[#090909]">
      <div className="container">
        <h2 className="text-[#F2F2F2] text-sm font-medium font-['Inter'] mb-6">
          Choose your industry
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">
          {industriesData.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`px-6 py-3 text-base leading-6 font-medium rounded-3xl transition-all duration-300 border
                ${activeTab === industry.id
                ? "bg-[rgba(255,255,255,0.90)] text-[#0D0D0D] border-[#FFF]"
                : "border-[rgba(60,60,60,0.72)] bg-[#111] text-[#FFF]"
                }`}
            >
              {industry.title}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="text-gray-300 text-base">
          <p>{activeContent.content}</p>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
