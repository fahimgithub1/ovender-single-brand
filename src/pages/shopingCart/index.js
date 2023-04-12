import OrderComplited from "@/components/shopingCartComp/orderComplited";
import ShopingCart from "@/components/shopingCartComp/shopingCart";
import ShopingForm from "@/components/shopingCartComp/shopingForm";
import CartWrapper from "@/layouts/cartWrapper";
import HeaderCom from "@/lib/header";
import PagesHeros from "@/lib/pagesHeros";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React, { useEffect, useState } from "react";
import { useGetCartDatilesQuery } from "../api/customerSlices";

export default function ShopingCartpage() {
  const [showCart, setShowcCart] = useState(true);
  const [showShopingForm, setShowShopingForm] = useState(false);
  const [showOrderComplited, setShowOrderComplited] = useState(false);

  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const { data: cartData } = useGetCartDatilesQuery(token);

  let cartLength = 0;
  let cartdata = "";
  if (cartData !== undefined && cartData !== null) {
    if (cartData.data !== null) {
      if (cartData.data.items.length > 0) {
        cartLength = cartData.data.items_count;
        cartdata = cartData;
      }
    }
  }

  // const CartView = () =>{
  //   setShowcCart(true)
  //   setShowShopingForm(false)
  //   setShowOrderComplited(false)
  // }

  const ShopingCartView = () => {
    setShowcCart(false);
    setShowShopingForm(true);
    setShowOrderComplited(false);
  };

  const OrderCompliteView = () => {
    setShowcCart(false);
    setShowShopingForm(false);
    setShowOrderComplited(true);
  };

  return (
    <>
      <HeaderCom title="Shooping Cart" />

      <main>
        <Navber />

        <section className="sectionMarginBot HerosSection MainBodyTop">
          <div className="row">
            <PagesHeros img='/shopping-cart.jpg' />
          </div>
        </section>

        <CartWrapper>
          {showCart && !showShopingForm && !showOrderComplited && (
            <ShopingCart onShopingCartView={ShopingCartView} cartdata={cartdata} />
          )}
          {showShopingForm && !showCart && !showOrderComplited && (
            <ShopingForm onOrderCompliteView={OrderCompliteView} cartdata={cartdata} />
          )}
          {showOrderComplited && !showCart && !showShopingForm && (
            <OrderComplited />
          )}
        </CartWrapper>

        <Footer />
      </main>
    </>
  );
}
