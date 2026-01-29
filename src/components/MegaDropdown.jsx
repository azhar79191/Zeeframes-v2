import React from "react"
import { Link, useLocation } from "react-router-dom"

import {
    Arc,
    Brand,
    Code,
    Consult,
    Guideline,
    Mobile,
    Motion,
    Product,
    Prototyping,
    UIUX,
    UX,
    Web,
} from "@/assets/images"

/* =======================
   TABS DATA
======================= */
const TabsData = [
    {
        id: 1,
        key: "uiux",
        text: "UI UX Design",
        icon: <UIUX />,
        path: "/services?tab=uiux",
    },
    {
        id: 2,
        key: "branding",
        text: "Brand Design",
        icon: <Brand />,
        path: "/services?tab=branding",
    },
    {
        id: 3,
        key: "nocode",
        text: "No-Code Development",
        icon: <Code />,
        path: "/services?tab=nocode",
    },
]

/* =======================
   SERVICES DATA
======================= */
const Services = [
    {
        id: 1,
        category: "uiux",
        text: "UI UX Consulting",
        desc: "Shape your product vision with insights, market analysis, and growth strategies.",
        path: "/services/ui-ux-consulting",
        icon: <Consult />,
    },
    {
        id: 2,
        category: "uiux",
        text: "UX Research & Insights",
        desc: "Uncover user needs and behaviors through research that drives design decisions.",
        path: "/services/ui-ux-insights",
        icon: <UX />,
    },
    {
        id: 3,
        category: "uiux",
        text: "UX Audit & Product Optimization",
        desc: "Align goals and deliverables into a strategic roadmap for market success.",
        path: "/services/ui-ux-audit",
        icon: <Product />,
    },
    {
        id: 4,
        category: "uiux",
        text: "Experience Architecture",
        desc: "Design intuitive structures and user flows that make products effortless.",
        path: "/services/ui-ux-experience",
        icon: <Arc />,
    },
    {
        id: 5,
        category: "uiux",
        text: "Design Systems & Guidelines",
        desc: "Develop scalable ecosystems that ensure brand consistency across platforms.",
        path: "/services/ui-ux-guideline",
        icon: <Guideline />,
    },
    {
        id: 6,
        category: "uiux",
        text: "Prototyping & User Testing",
        desc: "Turn ideas into prototypes, validate with users, and refine before launch.",
        path: "/services/ui-ux-prototyping",
        icon: <Prototyping />,
    },
    {
        id: 7,
        category: "uiux",
        text: "Web Design",
        desc: "Deliver striking, functional interfaces that enhance user satisfaction.",
        path: "/services/ui-ux-webDesign",
        icon: <Web />,
    },
    {   
        id: 8,
        category: "uiux",
        text: "Mobile Design",
        desc: "Enrich experiences with animations that bring interfaces to life.",
        path: "/services/ui-ux-mobileDesign",
        icon: <Mobile />,
    },

    /* BRANDING */
    {
        id: 9,
        category: "branding",
        text: "Brand Identity Design",
        desc: "Create clear brand identities that reflect values and resonate with audiences.",
        path: "/services/brand-identity",
        icon: <Consult />,
    },
    {
        id: 10,
        category: "branding",
        text: "Brand Strategy & Positioning",
        desc: "Define brand direction through research-driven strategy and insights.",
        path: "/services/brand-strategy",
        icon: <UX />,
    },
    {
        id: 11,
        category: "branding",
        text: "Motion Design",
        desc: "Purposeful motion that guides attention and enhances brand communication.",
        path: "/services/brand-product",
        icon: <Motion />,
    },
    {
        id: 12,
        category: "branding",
        text: "Visual Communication Design",
        desc: "Design clear visual systems that communicate ideas effectively.",
        path: "/services/brand-communication",
        icon: <Arc />,
    },
    {
        id: 13,
        category: "branding",
        text: "Rebranding & Evolution",
        desc: "Evolve brands with scalable systems and long-term relevance.",
        path: "/services/brand-evolution",
        icon: <Guideline />,
    },

    /* NO-CODE */
    {
        id: 14,
        category: "nocode",
        text: "Webflow Development",
        desc: "Build responsive Webflow websites focused on performance.",
        path: "/services/nocode-webflow",
        icon: <Consult />,
    },
    {
        id: 15,
        category: "nocode",
        text: "Framer Development",
        desc: "Build interactive Framer websites with smooth animations.",
        path: "/services/nocode-framer",
        icon: <UX />,
    },
    {
        id: 16,
        category: "nocode",
        text: "Figma Sites",
        desc: "Design and launch Figma-based websites with clean structure.",
        path: "/services/nocode-figma",
        icon: <Product />,
    },
    {
        id: 17,
        category: "nocode",
        text: "Platform Maintenance & Support",
        desc: "Maintain and optimize platforms for long-term stability.",
        path: "/services/nocode-maintenance",
        icon: <Arc />,
    },
]

/* =======================
   COMPONENT
======================= */
const MegaDropdown = ({ activeTab: propActiveTab }) => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)

    const activeTab = propActiveTab || searchParams.get("tab") || "uiux"

    const filteredServices = Services.filter(
        service => service.category === activeTab
    )

    return (
        <div className="pt-10 pb-25 bg-[#090909]">
            <div className="container">
                <div className="flex gap-6">

                    {/* ASIDE TABS */}
                    <aside className="sticky top-0">
                        {TabsData.map(tab => {
                            const isActive = activeTab === tab.key

                            return (
                                <Link
                                    key={tab.id}
                                    to={tab.path}
                                    className={`p-4 w-[279px] rounded-lg block transition hover:bg-[rgba(243,254,0,0.08)]
                  ${isActive ? "bg-[rgba(243,254,0,0.08)]" : ""}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span>{tab.icon}</span>
                                        <p className="text-base font-semibold text-[#FFF]">
                                            {tab.text}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })}
                    </aside>

                    {/* SERVICES GRID */}
                    <div className="grid grid-cols-2 gap-6">
                        {filteredServices.map(service => (
                            <Link
                                key={service.id}
                                to={service.path}
                                className="p-5 bg-[#090909] rounded-sm w-[456px]
                hover:bg-[rgba(243,254,0,0.08)] hover:-translate-y-2 transition duration-300"
                            >
                                <div className="flex gap-3">
                                    <span>{service.icon}</span>
                                    <div className="flex flex-col gap-1">
                                        <h2 className="text-base text-[#FFF] font-semibold leading-6">
                                            {service.text}
                                        </h2>
                                        <p className="text-base text-[#FFF] leading-6">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MegaDropdown
