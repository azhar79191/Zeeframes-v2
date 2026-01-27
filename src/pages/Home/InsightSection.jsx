import SectionHeader from '@/components/SectionHeader'
import React from 'react'
import { Button } from '@/components/ui/button'
import InsightCard from '@/components/InsightCard'
import insight1 from "@/assets/images/insight1.png";
import insight2 from "@/assets/images/insight2.png";
import insight3 from "@/assets/images/insight3.png";
import { Arrowup1 } from '@/assets/images';

const insightsData = [
  {
    img: insight1,
    title: "20+ GenAI UX patterns, examples and implementation tactics",
    description: "A shared language for product teams to build usable, intelligent and safe GenAI experiences...",
    readingtime: "7 min read",
    datetime: "Jan 23, 2025",
  },
  {
    img: insight2,
    title: "Skipping Figma, human after all, Figma grid, accessibility as an afterthought",
    description: "Weekly curated resources for designers — thinkers and makers.",
    readingtime: "7 min read",
    datetime: "Jan 23, 2025",
  },
  {
    img: insight3,
    title: "Is your creative character being sacrificed to Algorithm, Inc.?",
    description: "AI is changing how we work. Here’s why and how we must preserve the human spirit that drives...",
    readingtime: "7 min read",
    datetime: "Jan 23, 2025",
  },
];

const InsightSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className='flex justify-between'>
          <SectionHeader
            align='start'
            eyebrow="Our Insights"
            title="Insights That Inspire Vision Forward"
            titleclassName='w-127 leading-10 pt-4'
          />

          <Button className="w-41 h-12 bg-white">
            <span className="group-hover:hidden flex items-center gap-3 justify-center">
              Explore More
              <Arrowup1 />
            </span>
            <span className="hidden group-hover:block">
              See More
            </span>
          </Button>
        </div>

        <div className='grid grid-cols-3 gap-8 mt-12'>
          {insightsData.map((item, index) => (
            <InsightCard
              key={index}
              img={item.img}
              title={item.title}
              description={item.description}
              readingtime={item.readingtime}
              datetime={item.datetime}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default InsightSection
