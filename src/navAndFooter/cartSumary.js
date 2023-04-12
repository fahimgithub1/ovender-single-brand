import Link from "next/link";
import CartSummaryTh from "./cartSummaryTh";

const emptyCart = "/images/empty-cart.jpg";

export default function CartSummary(props) {
  const cartData = props.cartdata.data;
  
  let cartLength = 0;
  let cartTotalPrice = 0;

  if (cartData !== undefined) {
    cartLength = cartData.items_count;
    cartTotalPrice = Number(cartData.sub_total);
  }

  return (
    <div className="CartSummaryNav">
      <div className="row CartUpperSummary">
        <div className="upperLeft col-6">
          <span>{cartLength} </span>Item in Cart
        </div>

        <div className="upperRight col-6">
          <span>Cart Subtotal:</span>
          <p className="Price">
            Tk <span>{cartTotalPrice}</span>
          </p>
        </div>
      </div>

      <div className="CartNabBtn">
        <Link href="/shopingCart">Proceed To heckout</Link>
      </div>

      <div className="CartTable">
        {cartLength != 0 ? (
          <div>
            {cartData.items.map((item) => (
              <CartSummaryTh
                key={item.id}
                id={item.id}
                cartData={item}
                name={item.name}
                cartQuantity={item.quantity}
                src={item.product.images[0].url}
              />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <img className="emptyBoxImage" src={emptyCart} />
          </div>
        )}
      </div>

      <div className="CartNabBtn CartNabBtn1">
        <Link href="/shopingCart">View and Edit Cart</Link>
      </div>
    </div>
  );
}
