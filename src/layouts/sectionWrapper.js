import React from "react";

export default function SectionWrapper(props) {
  return (
    <section className={`sectionMarginBot ${props.sectionClass}`}>
      <div className="container">{props.children}</div>
    </section>
  );
}
