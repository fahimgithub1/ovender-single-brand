import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./mobileMenu";
import CustomerProfile from "./customerProfile";

export default function MobileNav() {
  const [isMobileMenuShow, setIsMobileMenuShow] = useState(true);

  const MobileCategoriHandler = () => {
    if (!isMobileMenuShow) {
      setIsMobileMenuShow(true);
    } else {
      setIsMobileMenuShow(false);
    }
  };

  const isBrowser = typeof window !== "undefined";
  const token = isBrowser ? localStorage.getItem("token") : null;

  return (
    <div className="ShowInTabe">
      <div className="MoboTop">
        <div className="container">
          <div className="row">
            <div className="col-3 CatagorisTabe">
              <nav className="navbar navbar-expand-lg">
                <div className="">
                  <button
                    className="navbar-toggler"
                    onClick={MobileCategoriHandler}
                  >
                    <i className="fa-solid fa-bars"></i>
                  </button>
                </div>
              </nav>
            </div>

            {!isMobileMenuShow && (
              <MobileMenu onHideCategoris={MobileCategoriHandler} />
            )}

            <div className="col-6 LogoTabe text-center">
              <Link href="/">
                <img src="/images/logo.png" alt="" />
              </Link>
            </div>

            <div className="col-3 CartTabe">
              <Link href="/shopingCart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="serchBer">
        <form action="">
          <input type="text" />
          <label>
            <i className="fa-solid fa-magnifying-glass"> </i>
          </label>
        </form>
      </div>

      <div className="MovboBottom">
        <div className="container">
          <Link className="active" href="/">
            <i className="fa-solid fa-house"></i>
          </Link>

          <Link href="/wish">
            <i className="fa-regular fa-heart"></i>
          </Link>

          {token === null ? (
            <Link href="/login">
              <i className="fa-regular fa-user"></i>
            </Link>
          ) : (
            <CustomerProfile />
          )}
        </div>
      </div>
    </div>
  );
}
