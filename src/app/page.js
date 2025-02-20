import React from "react";
import Slider from "@/components/templates/HomePage/slider/slider";
import CompanyLogos from "@/components/templates/HomePage/CompanyLogos/CompanyLogos";
import WorkFields from "@/components/templates/HomePage/workFields/workFields";
import CeoMessage from "@/components/templates/HomePage/CeoMessage/CeoMessage";
import Certificates from "@/components/templates/HomePage/Certificates/Certificates";
import RiseforTomorrow from "@/components/templates/HomePage/RiseForTomorrow/RiseforTomorrow";
import Customers from "@/components/templates/HomePage/Customers/Customers";
import LatestNews from "@/components/templates/HomePage/LatestNews/LatestNews";


async function HomePage() {
  const data = await fetch(`https://www.riseco.co/wp-json/wp/v2/posts?per_page=6`);
  const news = await data.json();
  
  return (
    <>
      <Slider />
      <CompanyLogos/>
      <WorkFields/>
      <RiseforTomorrow/>
      <CeoMessage/>
      {/* <Certificates/> */}
      <Customers/>
      <LatestNews LastNews={news}/>
    </>
  );
}

export default HomePage;
