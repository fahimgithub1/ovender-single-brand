import Link from "next/link";
import React from "react";

export default function BgWrapper(props) {
  return (
    <section className={`sectionMarginBot catagorisMain ${props.sectionClass}`}>
      <div className="container">
        <div className={`catagorisSection bgPadding ${props.bgClass}`}>
          {props.children}
        </div>
      </div>
    </section>
  );
}