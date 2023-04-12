import Wishcomp from "@/components/wish/wishcomp";
import CartWrapper from "@/layouts/cartWrapper";
import HeaderCom from "@/lib/header";
import PagesHeros from "@/lib/pagesHeros";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

export default function WishPage() {
  return (
    <>
      <HeaderCom title="Wish List" />

      <main>
        <Navber />

        <section className="sectionMarginBot HerosSection MainBodyTop">
          <div className="row">
            <PagesHeros img='/wishlist.jpg' />
          </div>
        </section>

        <CartWrapper>
          <Wishcomp />
        </CartWrapper>

        <Footer />
      </main>
    </>
  );
}
