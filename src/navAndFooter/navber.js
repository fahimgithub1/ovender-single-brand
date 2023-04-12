import MidNav from "./midNav";
import MobileNav from "./mobileNav";
import TopNav from "./topNav";

export default function Navber() {
  return (
    <nav>
      {/* <!--Navber For Laptop And Computer --> */}
      <div className="hideOnPhone">
        <TopNav />
        <MidNav />
      </div>

      {/* <!-- Navber Fop Mobile --> */}
      <MobileNav />
    </nav>
  );
}
