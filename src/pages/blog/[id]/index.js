import BlogLeftSide from "@/components/blogs/blogLeftSide";
import BlogRightSide from "@/components/blogs/blogRightSide";
import BlogSingleLeft from "@/components/blogs/blogSingleLeft";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import { useRouter } from "next/router";
import React from "react";

const blogleft = [
  {
    id: 1,
    src: "http://ovendar.com.bd/public/lib/images/blog/1655986381_1-w.jpg",
    helight: "Lorem Ipsum is simply dummy text of the printing and typesetting",
    title: "Why do we use it?",
    para: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
];

export default function RewardsAndGift() {
  const router = useRouter();
  const porductID = router.query.id;
  let reward1 = porductID;

  return (
    <>
      <HeaderCom title={`Ovendar Blog ${reward1}`} />

      <main>
        <Navber />

        <section className="MainBodyTop HerosSection sectionMarginBot">
          <div className="container mt-lg-2">
            <div className="row">
              {blogleft.map((item) => (
                <BlogSingleLeft
                  key={item.id}
                  title={item.title}
                  para={item.para}
                  src={item.src}
                  helight={item.helight}
                />
              ))}
              <BlogRightSide />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
