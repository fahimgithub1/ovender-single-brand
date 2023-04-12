import React, { useState } from "react";

export default function AccountInfo() {
  const [showChangeEail, setShowChangeEail] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);

  const changeEmail = () => {
    if (showChangeEail) {
      setShowChangeEail(false);
    } else {
      setShowChangeEail(true);
    }
  };

  const changePass = () => {
    if (showChangePass) {
      setShowChangePass(false);
    } else {
      setShowChangePass(true);
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="Account-InhtmlFormation"
      role="tabpanel"
      aria-labelledby="nav-Account-InhtmlFormation"
      tabIndex="0"
    >
      <h5>EDIT ACCOUNT INFORMATION </h5>

      {/* <!-- Addres InhtmlFormain From  start --> */}
      <div className="PasswordEdit">
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input type="text" placeholder="" />
          </div>

          <div>
            <label htmlFor="Phone">Phone Number: </label>
            <input type="text" placeholder="" />
          </div>

          {/* <!-- 11st check --> */}
          <div className="CheckBoxDiv" onClick={changeEmail}>
            <input className="CheckBox" type="checkbox" placeholder="" />
            <label htmlFor="Phone"> Change Email</label>
          </div>

          {/* <!-- 2nd check --> */}
          <div className="CheckBoxDiv">
            <input
              className="CheckBox"
              type="checkbox"
              placeholder=""
              onClick={changePass}
            />
            <label htmlFor="Phone"> Change Password</label>
          </div>

          {/* <!-- change Email --> */}
          {showChangeEail && (
            <div className="EmailChnage" id="EmaoChange">
              <div>
                <label htmlFor="email">Old Email: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label htmlFor="email">New Email: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label htmlFor="varification">Verification code: </label>
                <input type="text" placeholder="" />
              </div>
            </div>
          )}

          {/* <!-- change Email --> */}
          {showChangePass && (
            <div className="EmailChnage" id="PassowardChange">
              <div>
                <label htmlFor="email">Old Password: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label htmlFor="email">New Password: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label htmlFor="varification">Verification code: </label>
                <input type="text" placeholder="" />
              </div>
            </div>
          )}

          <div className="AddresSubmit">
            <p id="Adressadded">Save</p>
          </div>
        </form>
      </div>
      {/* <!-- Addres InhtmlFormain From  end --> */}
    </div>
  );
}
