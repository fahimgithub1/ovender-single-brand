import ForgetPassoward from "@/components/loginSingin/forgetPassoward";
import Login from "@/components/loginSingin/login";
import SingIn from "@/components/loginSingin/singIn";
import HeaderCom from "@/lib/header";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React, { useState } from "react";

export default function RewardsAndGift() {
  const [loginShow, setLoginShow] = useState(true);
  const [registerShow, setRegisterShow] = useState(false);
  const [forgetpassdShow, setForgetpassoShow] = useState(false);

  const onloginHandle = () => {
    setLoginShow(true);
    setRegisterShow(false);
    setForgetpassoShow(false);
  };

  const onRegisterHandle = () => {
    setLoginShow(false);
    setRegisterShow(true);
    setForgetpassoShow(false);
  };

  const onForgotHandle = () => {
    setLoginShow(false);
    setRegisterShow(false);
    setForgetpassoShow(true);
  };

  return (
    <>
      <HeaderCom title="Rewards And Gift" />

      <main>
        <Navber />
          <section className="MainBodyTop HerosSection sectionMarginBot LoginSection">
            <div className="container">
              <div className="row">
                {loginShow && !registerShow && !forgetpassdShow && (
                  <Login
                    onRegisterHandle={onRegisterHandle}
                    onForgotHandle={onForgotHandle}
                  />
                )}

                {registerShow && !loginShow && !forgetpassdShow && (
                  <SingIn onloginHandle={onloginHandle} />
                )}
                
                {forgetpassdShow && !loginShow && !registerShow && (
                  <ForgetPassoward onloginHandle={onloginHandle} />
                )}
              </div>
            </div>
          </section>
        <Footer />
      </main>
    </>
  );
}
