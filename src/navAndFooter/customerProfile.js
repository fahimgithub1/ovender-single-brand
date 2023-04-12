import {
  useGetCustomerDetailsMutation,
  useGetLogoutQuery,
} from "@/pages/api/authenticationApiSlices";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function CustomerProfile(props) {
  const [customerInfo, setCustomerInfo] = useState(null);
  const [customer] = useGetCustomerDetailsMutation();

  const router = useRouter();

  const token = props.token;

  const { data: logoutResponse } = useGetLogoutQuery(token);

  useEffect(() => {
    customer(token)
      .unwrap()
      .then((response) => {
        setCustomerInfo(response.data);
      });
  }, []);

  const handleLogOut = (event) => {
    event.preventDefault();
    logoutResponse;
    localStorage.removeItem("token");
    Cookies.remove('authToken')
    router.push("/login");
  };

  return (
    <div className="NavProfile">
      <div className="IconDiv">
        <i className="fa-regular fa-user"></i>
        <div>
          <p>Hi</p>
          {customerInfo !== null ? <p>{customerInfo.first_name}</p> : ""}
        </div>
      </div>

      <div className="ProfileUl">
        <ul>
          <li className="d-block mb-3">
            <Link href="/userProfile">
              <i className="fa-regular fa-user pr-3"></i> My Profile
            </Link>
          </li>
          
          <li className="d-block">
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
