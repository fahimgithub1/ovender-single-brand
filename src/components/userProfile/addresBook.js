import Lodding from "@/lib/lodding";
import { useGetAddressesQuery } from "@/pages/api/customerSlices";
import React, { useEffect, useState } from "react";
import NewAddress from "./newAddress";

export default function AddresBook() {
  const [showAddressForm, setShowAddressForm] = useState(false);

  const [token, setToken] = useState(null);
  const { data: addresses, isLoading, error } = useGetAddressesQuery(token);

  useEffect(() => {
    const isBrowser = typeof window !== "undefined";
    const tokenFromLocalStorage = isBrowser
      ? localStorage.getItem("token")
      : null;
    setToken(tokenFromLocalStorage);
  }, []);

  let addresBook = "";
  if (addresses !== undefined) {
    addresBook = addresses.data.map((item) => (
      <div className="AddressBox col-lg-4 col-md-6" key={item.id}>
        <div className="BoxADD">
          <div className="AddEdit row">
            <span className="col-10">{item.address1}</span>
            {/* <span className="EditAll col-2">Edit</span> */}
          </div>
          <p>Mobile: {item.phone}</p>
          <p>
            {item.country_name} {item.country} {item.city}
          </p>
          <p>{item.state}</p>
          <p> postcode: {item.postcode}</p>
          <span className="LocatinType">Office</span>
        </div>
      </div>
    ));
  }

  const FromHandler = () => {
    if (!showAddressForm) {
      setShowAddressForm(true);
    } else {
      setShowAddressForm(false);
    }
  };

  const FromClose = () => {
    if (!showAddressForm) {
      setShowAddressForm(true);
    } else {
      setShowAddressForm(false);
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="Address-Book"
      role="tabpanel"
      aria-labelledby="nav-Address-Book"
      tabIndex="0"
    >
      <div className="AddressAddbtn">
        <h5>Address Book</h5>
        <button id="AddAdressBtnO" onClick={FromHandler}>
          <i className="fa-solid fa-plus"></i> Add New Address
        </button>
      </div>

      {showAddressForm && <NewAddress onFromClose={FromClose} />}

      {/* {showAddAdres && <UpdateAddresFrom onAddAdres={addAdres} />} */}

      {!showAddressForm && (
        <div className="collectedAddress">
          <div className="row">
            {isLoading && <Lodding />}
            {error && <div>{error.message}</div>}
            {addresBook}
            {!isLoading && (addresBook === undefined ||
              addresBook.length === 0 ||
              addresBook === null) && 
              <div className="text-center NoDataPound">
                <img src="/no-data1-found.png" />
              </div>
              }
          </div>
        </div>
      )}
    </div>
  );
}
