import BgWrapper from "@/layouts/bgWrapper";
import React from "react";
import ContactForm from "./contactForm";
import MapBox from "./mapBox";

export default function MapAndFrom() {
  return (
    <BgWrapper sectionClass="MainBodyTop HerosSection sectionMarginBot">
      <div className="row ContactUSDiv">
        <h3 className="text-center">Contact</h3>
        <MapBox />
        <ContactForm />
      </div>
    </BgWrapper>
  );
}
