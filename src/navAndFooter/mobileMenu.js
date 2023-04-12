import { useGetAllCategorisQuery } from "@/pages/api/apiSlices";
import Link from "next/link";

export default function MobileMenu(props) {
  const { data: Categories, error, isLoading } = useGetAllCategorisQuery();

  const categoriesID = 10;
  let nevItems = "";

  if (Categories !== undefined) {
    nevItems = Categories.data.slice(0, 12).map((item) => (
      <li className="nav-item" key={item.id}>
        <div className="d-flex">
          <Link
            className="nav-link"
            aria-current="page"
            href={`/categories/${item.slug}`}
          >
            {item.name}
          </Link>
        </div>
      </li>
    ));
  } else {
    
  }

  return (
    <div className="NavCaragoris">
      <ul className="navbar-nav">
        <li className="MobileMwnuTitle">
          <span>All Categories</span>
          <i
            className="fa-solid fa-xmark hidemobomenu"
            onClick={props.onHideCategoris}
          ></i>
        </li>

        {nevItems}

        {/* <li className="nav-item" onClick="showDropdown()"> */}
        <li className="nav-item">
          {/* <div className="d-flex">
            <Link
              className="nav-link"
              aria-current="page"
              href={`/categories/${categoriesID}`}
            >
              Tabletop
            </Link>
          </div>

          <i className="fa-solid fa-chevron-right navLinkI"></i> */}

          {/* <!-- mobile Deopdowon Menu --> */}
          {/* <div className="w-100 DeopDownMenuMobiel">
            <div className="DeopDownDiv">
              <h6>Living Room</h6>
              <ul>
                <li>
                  <Link href={`/categories/${categoriesID}`}>Dresses</Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>Jeggings</Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>Kurtis</Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>
                    Palazzo Pants & Culottes
                  </Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>Pants</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6>Bed Room Furniture</h6>
              <ul>
                <li>
                  <Link href={`/categories/${categoriesID}`}>Flip Flops</Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>
                    Heeled Sandals
                  </Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>
                    House Slippers
                  </Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>Slip-Ons</Link>
                </li>
                <li>
                  <Link href={`/categories/${categoriesID}`}>
                    Wedge Sandals
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}
        </li>
      </ul>
    </div>
  );
}
