import { useGetCategorisChildQuery } from "@/pages/api/apiSlices";
import Link from "next/link";

export default function LaptopMenu(props) {
  const { data: Categories, error, isLoading } = useGetCategorisChildQuery();
  const refresh = () => window.location.reload(true);

  const categoriesID = 10;
  let nevItems = "";

  if (Categories !== undefined) {
    const categories = Object.entries(Categories);
    const length = categories.length;

    nevItems = categories.slice(0, length).map((item) => {
      if (item[1] !== undefined) {
        return (
          <>
            {item[1].children.length === 0 ? (
              <li
                className="nav-item"
                key={item.id}
                onClick={() => {
                  props.setIsLaptopMenuShow(true), refresh;
                }}
              >
                <div className="d-flex">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    href={`/categories/${item[1].slug}`}
                  >
                    {item[1].name}
                  </Link>
                </div>
              </li>
            ) : (
              <li
                className="nav-item NavSubBranceHover"
                key={item.id}
                onClick={() => {
                  props.setIsLaptopMenuShow(true), refresh;
                }}
              >
                <div className="d-flex NavSubBrance">
                  <div>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      href={`/categories/${categoriesID}`}
                    >
                      {item[1].name}
                    </Link>
                  </div>

                  <div>
                    <i className="fa-solid fa-chevron-right navLinkI"></i>
                  </div>
                </div>

                {/* <!-- for deorop down li dtart --> */}
                <div className="category-sub-menu bg-1 TabletopSubMenu">
                  <div className="row g-4">
                    {item[1].children.map((item) => (
                      <div className="col-lg-4" key={item.id}>
                        {item.children.length !== 0 ? (
                          <>
                            <h4>{item.name}</h4>
                            <ul>
                              <li>
                                <Link href={`/categories/${item.slug}`}>
                                  {item.name}
                                </Link>
                              </li>
                              {item.children.map((item) => (
                                <li key={item.id}>
                                  <Link href={`/categories/${item.slug}`}>
                                    {item.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </>
                        ) : (
                          <>
                            <h4>{item.name}</h4>
                            <ul>
                              <li>
                                <Link href={`/categories/${item.slug}`}>
                                  {item.name}
                                </Link>
                              </li>
                            </ul>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            )}
          </>
        );
      }
    });
  } else {
  }

  return (
    <div className="NavClickAction">
      <ul className="navbar-nav">{nevItems}</ul>
    </div>
  );
}
