import { useGetAllProductsQuery } from "@/pages/api/apiSlices";
import { useGetWishListQuery } from "@/pages/api/cardOrderSlice";
import { useGetCartDatilesQuery } from "@/pages/api/customerSlices";
import Link from "next/link";
import { useState } from "react";
import CartSummary from "./cartSumary";
import CustomerProfile from "./customerProfile";
import LaptopMenu from "./laptopMenu";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

export default function MidNav() {
  const [productSearch, setProductSearch] = useState("");
  const [isLaptopMenuShow, setIsLaptopMenuShow] = useState(true);
  const { data: allProduct } = useGetAllProductsQuery();
  const router = useRouter();

  let searceResult = null;

  if (allProduct != undefined) {
    searceResult = (
      <div className="sercehSuggest">
        <ul>
          {productSearch.length > 0
            ? allProduct.data
                .filter((data) =>
                  data.name.toLowerCase().includes(productSearch)
                )
                .map((item) => (
                  <li
                    onClick={(e) => {
                      setProductSearch(item.name);
                      setProductSearch("");
                    }}
                  >
                    <Link href={`/searchProducts/${productSearch}`}>
                      {item.name}
                    </Link>
                  </li>
                ))
            : null}
        </ul>
      </div>
    );
  }

  // token
  let token = null;
  token = Cookies.get("authToken");

  // wish itme
  const { data: wishtItems, lodding, error } = useGetWishListQuery(token);
  let wishlength = 0;
  if (wishtItems != undefined) {
    wishlength = wishtItems.data.length;
  }

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

  //  function
  const laptopCategoriHandler = () => {
    if (!isLaptopMenuShow) {
      setIsLaptopMenuShow(true);
    } else {
      setIsLaptopMenuShow(false);
    }
  };

  const submitSearch = (event) => {
    event.preventDefault();
    setProductSearch("");
    router.push(`/searchProducts/${productSearch}`);
  };

  return (
    <div className="MidNev">
      <div className="container">
        <div className="row">
          <div className="logo col-2 text-center">
            <Link href="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="Serchber col-1 DestopNavCtagoris">
            {isLaptopMenuShow && (
              <i
                className="fa-solid fa-bars CatagorisIcinHide"
                onClick={laptopCategoriHandler}
              ></i>
            )}

            {!isLaptopMenuShow && (
              <i className="fa fa-xmark" onClick={laptopCategoriHandler}></i>
            )}

            {/* <!-- scorle click action --> */}
            {!isLaptopMenuShow && (
              <LaptopMenu setIsLaptopMenuShow={setIsLaptopMenuShow} />
            )}
          </div>

          <div className="Serchber productSearch col-6">
            <form action="" onSubmit={submitSearch}>
              <input
                type="text"
                placeholder="Search Your Product....."
                onChange={(e) => {
                  setProductSearch(e.target.value);
                }}
                value={productSearch}
              />

              <label onClick={submitSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
            </form>

            {searceResult}
          </div>

          <div className="SelectedIocn col-3">
            <div className="IconDiv NavCart Chartnonem">
              <i className="fa-solid fa-cart-shopping"></i>

              <div>
                <p className="Count">{cartLength}</p>
                <Link href="/shopingCart">
                  <p>My Cart</p>
                </Link>
              </div>

              {/* <!-- Hover show chart summery start --> */}
              <CartSummary cartdata={cartdata} />
              {/* <!-- Hover show chart summery end --> */}
            </div>

            <Link href="/wish" className="IconDiv lovehide Chartnone">
              <div className="IconDiv">
                <i className="fa-regular fa-heart"></i>
                <div>
                  <p className="Count">{wishlength}</p>
                  <p>My Wish</p>
                </div>
              </div>
            </Link>

            {token === null || token === "" || token === undefined ? (
              <Link href="/login">
                <div className="IconDiv">
                  <i className="fa-regular fa-user"></i>
                  <div>
                    <p>Login</p>
                    <p>Register</p>
                  </div>
                </div>
              </Link>
            ) : null}

            {token != null ? <CustomerProfile token={token} /> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
