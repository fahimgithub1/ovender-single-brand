import LeftMenu from "@/components/userProfile/leftMenu";
import RightSide from "@/components/userProfile/rightSide";
import SectionWrapper from "@/layouts/sectionWrapper";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React from "react";
import withAuth from "@/components/hoc/withAuth";


function UserProfile() {
  return (
    <>
      <HeaderCom title="PrivacyPolicy" />

      <main>
        <Navber />

        <SectionWrapper sectionClass="MainBodyTop HerosSection">
          <div className="row">
            <LeftMenu />
            <RightSide />
          </div>
        </SectionWrapper>

        <Footer />
      </main>
    </>
  );
}

export default UserProfile;
