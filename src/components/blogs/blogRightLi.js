import Link from "next/link";
import React from "react";

export default function BlogRightLi(props) {
  return (
    <li>
      <Link href={`/blog/${props.id}`}>
        <i className={`${props.icon}`}></i>
        <p className="d-inline px-2">{props.title}</p>
      </Link>
    </li>
  );
}
