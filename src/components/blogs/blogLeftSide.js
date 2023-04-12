import React from "react";
import BlogCard from "./blogCard";

const blog = [
  {
    id: 1,
    title: "Minimalist Chandelier",
    img: "http://ovendar.com.bd/public/lib/images/blog/1656050635_1-w.jpg",
  },
  {
    id: 2,
    title: "Minimalist Chandelier",
    img: "http://ovendar.com.bd/public/lib/images/blog/1656050635_1-w.jpg",
  },
  {
    id: 3,
    title: "Minimalist Chandelier",
    img: "http://ovendar.com.bd/public/lib/images/blog/1656050635_1-w.jpg",
  },
  {
    id: 4,
    title: "Minimalist Chandelier",
    img: "http://ovendar.com.bd/public/lib/images/blog/1656050635_1-w.jpg",
  },
];

export default function BlogLeftSide() {
  return (
    <div className="col-lg-9 col-md-8">
      <div className="row">
        {blog.map((itme) => (
          <BlogCard
            key={itme.id}
            title={itme.title}
            img={itme.img}
            id={itme.id}
          />
        ))}
      </div>
    </div>
  );
}
