import Lodding from "@/lib/lodding";
import {
  useGetWishListQuery,
  useRemoveWishlistMutation,
} from "@/pages/api/cardOrderSlice";
import React, { useEffect, useState } from "react";

export default function MyWishTr(props) {
  const [RemoveWishList] = useRemoveWishlistMutation();

  const [token, setToken] = useState(null);

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const tokenFromLocalStorage = isBrowser
      ? localStorage.getItem("token")
      : null;
    setToken(tokenFromLocalStorage);
  }, []);

  const { data: wishData, lodding, error } = useGetWishListQuery(token);

  const deleteItem = (id) => {
    const product_id = id;
    RemoveWishList({ product_id, token })
      .unwrap()
      .then((Response) => {
        console.log(Response.massage);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let wishContent = "";
  if (wishData != undefined) {
    wishContent = wishData.data.map((item) => (
      <div className="table-responsive ORderResponsive">
        <table className="table table-borderless Oderable">
          <tr>
            <td className="col-1">
              <div className="product-img">
                <img src={item.product.images[0].url} alt="Image" />
              </div>
            </td>

            <td>
              <a href="shop-details.html" className="product-name">
                {item.product.name}
              </a>
            </td>

            <td>
              <span className="price-txt">
                Tk <span className="main-price">{item.product.price}</span>
              </span>
            </td>

            {/* <td className="width-110px">
              <button
                onClick={() => {
                  addToCart(item);
                }}
              >
                Add To Cart
              </button> 
            </td> */}

            <td className="width-38px">
              <button
                className="cart-delete WishBTn2"
                onClick={() => {
                  deleteItem(item.product.id);
                }}
              >
                <i className="fa-solid fa-delete-left"></i>
              </button>
            </td>
          </tr>
        </table>
      </div>
    ));
  }

  return (
    <div>
      {!lodding && wishContent}{" "}
      {(lodding || wishData == undefined) && <Lodding />}
      { !lodding &&(wishData === undefined ||
          wishData.length === 0) && (
          <div className="emptyBox">
            <img className="emptyBoxImage" src="/images/empty-cart.jpg" />
            <h4>No Item Available</h4>
          </div>
        )}
    </div>
  );
}
