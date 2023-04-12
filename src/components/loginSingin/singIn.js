import {
  useGetLogoutQuary,
  useRegisterMutation,
} from "@/pages/api/authenticationApiSlices";
import React, { useState } from "react";

export default function SingIn(props) {
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password_confirmation, setPassword_confirmation] = useState();

  const [isPasswordSame, setIsPasswordSame] = useState(false)
  const [isSubmited, setIsSubmited] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);

  const [Register] = useRegisterMutation();
  // const {
  //   data: logdin,
  //   isLoading,
  //   error,
  //  } = useGetLogoutQuary();

  const onRegisterSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      email,
      first_name,
      last_name,
      password,
      password_confirmation,
    };

    if(password.length >= 6){
      setPasswordLength(true)
    }

    if(password !== password_confirmation && passwordLength){
      setIsPasswordSame(true)
    }

    if(isPasswordSame){
      Register(userInfo)
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setFirst_name("");
    setLast_name("");
    setEmail("");
    setPassword("");
    setPassword_confirmation("");

    setIsSubmited(true)
    }
  };

  const Form = (
    <form className="LginForm SingInForm" onSubmit={onRegisterSubmit}>
      <div>
        <label htmlFor="name">Frist Name</label>
        <input
          type="text"
          placeholder="Enter Frist Name"
          value={first_name}
          required
          onChange={(e) => {
            setFirst_name(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="name">Last Name </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          required
          value={last_name}
          onChange={(e) => {
            setLast_name(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="email">Email </label>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>

      <div>
        <label htmlFor="Password">Password</label>
        <input
          type="password"
          placeholder="Enter User Password"
          value={password}
          required
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        {!passwordLength && <h6 className="text-danger">Password must be minimum 6 character</h6>}
      </div>

      <div>
        <label htmlFor="Password">Conferm Password </label>
        <input
          type="password"
          placeholder="Enter Conferm Password"
          value={password_confirmation}
          required
          onChange={(e) => {
            setPassword_confirmation(e.target.value);
          }}
        />
        {isPasswordSame && <h6 className="text-danger">Password Not Matched</h6>}
      </div>

      <button className="FaBtn" type="submit">
        Submit
      </button>
    </form>
  );

  return (
    <div className="col-11 Login SingDiv text-center" id="SingDiv">
      <h4>Register</h4>

      {!isSubmited && Form}

      {isSubmited && <h4 className="text-dark">Go To Login</h4>}

      <div className="registerDiv">
        <button
          className="FaBtn RegistBtn LoginBtn"
          onClick={props.onloginHandle}
        >
          Go Back To Login
        </button>
      </div>
    </div>
  );
}
