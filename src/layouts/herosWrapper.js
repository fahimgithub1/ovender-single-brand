import React from "react";

export default function HerosWrapper(props) {
  return (
    <section className="MainBodyTop HerosSection">
      <div className="container">
        {props.children}
      </div>
    </section>
  );
}
