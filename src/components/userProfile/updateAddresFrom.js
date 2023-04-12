import { useUpdateAccountMutation } from "@/pages/api/customerSlices";
import React, { useEffect, useState } from "react";

export default function UpdateAddresFrom(props) {
  const accountInfo = props.accountInfo;

  const [fristName, setFristName] = useState(accountInfo.first_name);
  const [lastName, setLastName] = useState(accountInfo.last_name);
  const [email, setEmail] = useState(accountInfo.email);
  const [gender, setGender] = useState("");

  const isBrowser = typeof window !== "undefined";
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken(isBrowser ? localStorage.getItem("token") : null);
  }, []);

  const [updateAccountInfo] = useUpdateAccountMutation();

  const submit = (event) => {
    event.preventDefault();

    const updateInfo = {
      first_name: fristName,
      last_name: lastName,
      email,
      gender: "Male",
    };

    updateAccountInfo({ updateInfo, token })
      .unwrap()
      .then((response) => console.log(response))
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      setFristName("");
      setLastName("");
      setEmail("");
      setGender("");

      window.location.reload(true);
      props.onTootle();
    }, 1000);

  };

  return (
    <div className="addressInfoFrom">
      <form>
        <div>
          <label htmlFor="name">Frist Name: </label>
          <input
            type="text"
            placeholder=""
            value={fristName}
            onChange={(e) => {
              setFristName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name">Last Name: </label>
          <input
            type="text"
            placeholder=""
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>

        <div>
          <label htmlFor="name">Gender: </label>
          <select
            name="cars"
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option value="saab">Male</option>
            <option value="mercedes">FeMale</option>
            <option value="volvo">others</option>
          </select>
        </div>

        <div>
          <label htmlFor="name">Email: </label>
          <input
            type="text"
            placeholder=""
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="AddresSubmit">
          <p id="Adressadded" onClick={submit}>
            Update Info
          </p>
          <p className="CalcleAdd" id="Adressadded" onClick={props.onTootle}>
            Cencle
          </p>
        </div>
      </form>
    </div>
  );
}
