import LeftSide from "@/components/aboutUs/leftSide";
import RightSide from "@/components/aboutUs/rightSide";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

const TramsAndConditons = [
  {
    id: 1,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 2,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 3,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
  {
    id: 4,
    title: "Acceptance of our Terms",
    text: "JAMIDARI has been found and established in 2014 when online marketing strategies were taking their place all over the world. A Digital Marketing Solution has been teamed up with experts and professional workers who intend to support clients 24/7, 365 days. We offer all kinds of necessary services for online-based business domestically and internationally, which includes, Search engine optimization, social media marketing, email marketing, SMS marketing, pay per click, branding, promotion, website design and development, domain registration, web hosting providing, outsourcing training, etc.",
  },
];

export default function AboutUs() {
  return (
    <>
      <HeaderCom title="TramsAndConditon" />

      <main>
        <Navber />
        
        <section className="MainBodyTop HerosSection sectionMarginBot">
          <div className="container mt-lg-2">
            <div className="row">
              <LeftSide />
              <RightSide />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
