import React from 'react'

import ShowcaseCard from "@/components/ShowcaseCard";
import img1 from "@/assets/images/showcase1.png";
import img2 from "@/assets/images/showcase2.png";
import img3 from "@/assets/images/showcase3.png";
import img4 from "@/assets/images/showcase4.png";
import img5 from "@/assets/images/showcase5.png";
import img6 from "@/assets/images/showcase6.png";
const ShowCaseCards = () => {
  return (
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 gap-8 sm:mt-16 mt-8">

          <ShowcaseCard
              image={img1}
              title="Bloom Money"
              description="Empowering communities with financial solutions."
          />

          <ShowcaseCard
              className="sm:mt-30"
              image={img2}
              title="Alfan"
              description="The Platform for Content Creators"
          />
          <ShowcaseCard
              image={img3}
              title="Earpoin"
              description="The Best Place ToFind Productivity Tools"
          />

          <ShowcaseCard
              className="sm:mt-30"
              image={img4}
              title="Finnecta"
              description="Wallet application to streamline digital transactions"
          />
          <ShowcaseCard
              image={img5}
              title="Trivo"
              description="Clearbit, a business intelligence platform"
          />
          <ShowcaseCard
              className="sm:mt-30"
              image={img6}
              title="Fastgo"
              description="Fastgo’s scooter rental app to drive adoption"
          />
      </div>
  )
}

export default ShowCaseCards
