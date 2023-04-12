import React from "react";

export default function ContactForm() {
  return (
    <div className="col-lg-6 col-md-6">
      <form className="Contactfrom">
        <label for="name">Name</label> <br />
        <input type="text" />
        <label for="email">Email</label> <br />
        <input type="text" />
        <label for="massage">Phone</label> <br />
        <input type="text" />
        <label for="massage">Massage</label> <br />
        <textarea
          name="text"
          placeholder="Type massage"
          className="d-block w-100"
        ></textarea>
        <div className="w-100 text-center">
          <button className="">Sent</button>
        </div>
      </form>
    </div>
  );
}
