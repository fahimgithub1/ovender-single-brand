import SearchProductsBody from "@/components/searchProducts/searchProductsBody";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";

export default function SearchProducts() {
  return (
    <>
      <HeaderCom title="Products on Search" />

      <main>
        <Navber />
        <SearchProductsBody />

        <Footer />
      </main>
    </>
  );
}
