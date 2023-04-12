import {
  useGetCustomerDetailsMutation,
  useLoginAuthenticMutation,
} from "@/pages/api/authenticationApiSlices";
import { getCustomer, setToken } from "@/store/slices/customerInfo";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";


export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [timer, setTimer] = useState(null);

  const dispatch = useDispatch();
  const [customer1] = useGetCustomerDetailsMutation();

  const router = useRouter();

  const [LoginAuthentic] = useLoginAuthenticMutation();

  const onLoginSubmit = (event) => {
    event.preventDefault();

    const loginInfo = {
      email,
      password,
    };

    LoginAuthentic(loginInfo)
      .unwrap()
      .then((response) => {
        const token = response.token;

        localStorage.setItem("token", token);
        Cookies.set('authToken', token);

        dispatch(setToken({ token }));

        customer1(token)
          .unwrap()
          .then((response) => {
            dispatch(getCustomer(response.data));
          })

          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });

    setTimer(
      setTimeout(() => {
        router.push("/");
      }, 1500)
    );
  };

  return (
    <div className="col-11 Login LoginDiv text-center" id="LoginDiv">
      <h4>Login</h4>

      <form className="LginForm" onSubmit={onLoginSubmit}>
        <label htmlFor="username">User Name Or Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter User Name Or Email"
        />

        <label htmlFor="username">Password</label>
        <input
          type="password"
          placeholder="Enter User Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button className="FaBtn" type="submit">
          Login
        </button>

        <label
          className="FprgtPasswordDiva mt-2 ForgotShowcli"
          onClick={props.onForgotHandle}
        >
          Forgot Password?
        </label>
      </form>

      <div className="LoginOr">
        <span>or Login With</span>

        <br />
        <button className="FaBtn">
          <i className="fa-brands fa-facebook"></i>
        </button>
        <button className="FaBtn">
          <i className="fa-brands fa-google"></i>
        </button>
        <button className="FaBtn">
          <i className="fa-brands fa-linkedin-in"></i>
        </button>
      </div>

      <div className="registerDiv">
        <button className="FaBtn RegistBtn" onClick={props.onRegisterHandle}>
          Register Now
        </button>
      </div>
    </div>
  );
}
