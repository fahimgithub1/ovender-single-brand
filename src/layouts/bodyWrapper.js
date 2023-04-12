import React from "react";

export default function BodyWrapper(props) {
  return (
    <section className="MainBodyTop HerosSection">
      {props.children}
    </section>
  );
}
