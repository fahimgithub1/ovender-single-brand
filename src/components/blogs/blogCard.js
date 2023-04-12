import Link from "next/link";
import React from "react";

export default function BlogCard(props) {
  return (
    <div className="col-6 col-lg-4 col-md-6">
      <Link href={`/blog/${props.id}`}>
        <div className="BlogCard">
          <div className="ImageBox">
            <img
              src={props.img}
            //   src="http://ovendar.com.bd/public/lib/images/blog/1656050635_1-w.jpg"
              alt=""
            />
          </div>
          <h6>{props.title}</h6>

          <hr />
        </div>
      </Link>
    </div>
  );
}
