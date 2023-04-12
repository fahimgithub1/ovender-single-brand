import Lodding from "@/lib/lodding";
import { useGetCustomerDetailsMutation } from "@/pages/api/authenticationApiSlices";
import { useAddaddresSaveCardMutation } from "@/pages/api/cardOrderSlice";
import { useGetAddressesQuery } from "@/pages/api/customerSlices";
import React, { useEffect, useState } from "react";

export default function SaveAddres(props) {
  const [customerData, setCustomerData] = useState("");
  const [token, setToken] = useState(null);
  const { data: addresses, isLoading, error } = useGetAddressesQuery(token);
  const [customer] = useGetCustomerDetailsMutation();
  const [saveAddressCard] = useAddaddresSaveCardMutation();
  
  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const tokenFromLocalStorage = isBrowser
      ? localStorage.getItem("token")
      : null;
    setToken(tokenFromLocalStorage);
  }, []);

  const selectAddress = (item) => {
    customer(token)
      .unwrap()
      .then((response) => {
        setCustomerData(response.data);
      });

    let saveAddress = {
      billing: {
        address1: {
          // 0: item,
        },
        use_for_shipping: true,
        first_name: customerData.first_name,
        last_name: customerData.last_name,
        email: customerData.email,
        address_id: item.id,
      },
      shipping: {
        address1: {
          // 0: item,
        },
        use_for_shipping: true,
        first_name: customerData.first_name,
        last_name: customerData.last_name,
        email: customerData.email,
        address_id: item.id,
      },
    };

    saveAddressCard({ saveAddress, token })
      .unwrap()
      .then((response) => {
        setCustomerData(response.data);
      });
  };

  let addresBook = "";
  if (addresses !== undefined) {
    addresBook = addresses.data.map((item) => (
      <div
        className="AddressBox addressCard col-6 col-lg-4 col-md-6"
        key={item.id}
      >
        <div className="BoxADD cardDiv">
          <input
            onClick={() => {
              selectAddress(item);
            }}
            type="radio"
            id="html"
            name="fav_language"
            value=""
          />

          <div className="mainAddress">
            <div className="AddEdit row">
              <span className="col-10">{item.address1}</span>
            </div>
            <p>Mobile: {item.phone}</p>
            <p>
              {item.country_name} {item.country} {item.city}
            </p>
            <p>{item.state}</p>
            <p> postcode: {item.postcode}</p>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <div className="row saveAddress">
      {!isLoading && addresBook}
      {isLoading && <Lodding />}
    </div>
  );
}
