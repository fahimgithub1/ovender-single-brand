import React from "react";
import BlogRightLi from "./blogRightLi";

const blogNews = [
    {
        id: 1,
        icon: 'fa-solid fa-arrow-right',
        title: 'Objectively communicate business core competencies',
    },
    {
        id: 2,
        icon: 'fa-solid fa-arrow-right',
        title: 'Objectively communicate business core competencies',
    },
    {
        id: 3,
        icon: 'fa-solid fa-arrow-right',
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    },
    {
        id: 4,
        icon: 'fa-solid fa-arrow-right',
        title: 'Minimalist Chandelier',
    },
]

export default function BlogRightSide() {
  return (
    <div className="col-lg-3 col-md-4 RecentBlog">
      <h3>Recent Blog</h3>
      <ul>
        {blogNews.map((item)=>(
            <BlogRightLi
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            icon={item.icon} 
            />
        ))}
      </ul>
    </div>
  );
}
