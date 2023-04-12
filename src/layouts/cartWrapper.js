import React from "react";
import SectionWrapper from "./sectionWrapper";

export default function CartWrapper(props) {
  return (
    <SectionWrapper sectionClass="tab-section  productPhonemargin WidhPage">
      <div className="row">
        <div className="col-12 px-0">
          <div className="tab-contents">{props.children}</div>
        </div>
      </div>
    </SectionWrapper>
  );
}
