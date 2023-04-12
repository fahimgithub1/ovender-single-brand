import { useAddaddressesMutation } from "@/pages/api/customerSlices";
import React, { useEffect, useState } from "react";

export default function FillupForm(props) {
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const [sortCountry, setSortCountry] = useState("");
  const [city, setCity] = useState("");
  const [postCode, setPostCode] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");

  const [addAddressApi] = useAddaddressesMutation(props);
  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const addAddress = (event) => {
    event.preventDefault();

    let address = {
      address1: [title],
      city: city,
      country: sortCountry,
      country_name: country,
      phone: phone,
      postcode: postCode,
      state: state,
    };

    addAddressApi({ address, token })
      .unwrap()
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.massage);
      });

    setTitle("");
    setCity("");
    setCountry("");
    setPhone("");
    setPostCode("");
    setState("");
    setSortCountry("");

    address = "";

    props.onFromClose();
  };

  return (
    <form className="form-row">
      <div className="form-col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Address Title / Name"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="form-col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Country Name"
          value={country}
          onChange={(e) => {
            setCountry(e.target.value);
          }}
        />
      </div>

      <div className="form-col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Short from of country"
          value={sortCountry}
          onChange={(e) => {
            setSortCountry(e.target.value);
          }}
        />
      </div>

      <div className="form-col-5">
        <input
          type="text"
          className="form-control"
          placeholder="City"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        />
      </div>

      <div className="form-col-5">
        <input
          type="text"
          className="form-control"
          placeholder="Postcode"
          value={postCode}
          onChange={(e) => {
            setPostCode(e.target.value);
          }}
        />
      </div>

      <div className="form-col-5">
        <input
          type="tel"
          className="form-control"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
      </div>

      <div className="form-col-5">
        <input
          type="text"
          className="form-control"
          placeholder="state"
          value={state}
          onChange={(e) => {
            setState(e.target.value);
          }}
        />
      </div>

      <button className="saveAddress" onClick={addAddress}>
        Save
      </button>

      {/* <div className="form-col-10">
        <textarea
          className="form-control textarea"
          placeholder="Notes about your order, e.g. special notes for delivery"
        ></textarea>
      </div> */}
    </form>
  );
}
