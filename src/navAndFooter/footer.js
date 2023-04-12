import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bgPadding mb-5 mb-lg-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-4">
            <h4>Customer Care</h4>

            <ul>
              <li>
                <Link href="/tramsAndConditon">How to Shop</Link>
              </li>
              <li>
                <Link href="/tramsAndConditon">Returns and Refunds</Link>
              </li>
              <li>
                <Link href="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4">
            <h4>Ovendar</h4>

            <ul>
              <li>
                <Link href="/aboutUs">About Ovenar</Link>
              </li>
              <li>
                <Link href="/tramsAndConditon">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/privacyPolicy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/blogs">Ovendar Blog</Link>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-4">
            <h4>Follow Us</h4>

            <div className="ContactDiv">
              <div className="SocialIocn">
                <ul>
                  <li>
                    <Link href="#" className="facbookNav">
                      <i className="fa-brands fa-facebook-f"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="tuitterNav">
                      <i className="fa-brands fa-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Youtube">
                      <i className="fa-brands fa-youtube"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="Youtube">
                      <i className="fa-brands fa-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="facbookNav">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="/images/payment.png" alt="Ovender Logo" />
      </div>

      <div className="copWrite">
        <p className="text-center">
          ©2022 Ovendar. All Rights Reserved. | Design & Development By:-
          Digital Marketing Solution (Pvt.) Ltd.
        </p>
      </div>
    </footer>
  );
}
