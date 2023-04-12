import { useForgotPasswordMutation } from "@/pages/api/authenticationApiSlices";
import React, { useState } from "react";

export default function ForgetPassoward(props) {
  const [email, setEmail] = useState();
  const [isMailSent, setIsMailSent] = useState(false);

  const [forgotPassword] = useForgotPasswordMutation();

  const onForgotPassowardSubmit = (event) => {
    event.preventDefault();

    forgotPassword(email)
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    setEmail("");
    setIsMailSent(true);
  };

  const Form = (
    <form className="LginForm SingInForm" onSubmit={onForgotPassowardSubmit}>
      <div>
        <label for="email">Email </label>
        <input
          type="text"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <button className="FaBtn" type="submit">
        Forgot Password
      </button>
    </form>
  );

  return (
    <div className="col-11 Login ForgotPassowrdDiv text-center">
      <h4>Forgot Password</h4>

      {!isMailSent && Form}

      {isMailSent && <h3 className="mt-4">Check Your Mail</h3>}

      <div className="registerDiv">
        <button
          className="FaBtn RegistBtn LoginBtn ForGotBtn"
          onClick={props.onloginHandle}
        >
          Go Back To Logdin
        </button>
      </div>
    </div>
  );
}
