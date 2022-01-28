import React from "react";
import "./Form.styles.scss";

export function Form() {
  return (
    <div className="content-layout">
      <h2 className="title">Title Here</h2>
      <form className="contact-form">
        <ul>
          <li className="contact-form__item">
            <label htmlFor="fname">First Name</label>
            <input type="text" id="fname" name="fname" />
          </li>
          <li className="contact-form__item">
            <label htmlFor="fname">Last Name</label>
            <input type="text" id="lname" name="lname" />
          </li>
          <li className="contact-form__item">
            <label htmlFor="email">Email Address</label>
            <input type="text" id="email" name="email" />
          </li>
          <li>
            <textarea
              name="message"
              rows="10"
              cols="30"
              placeholder="Write your message"
            ></textarea>
          </li>
          <li>
            <input className="submit-btn" type="submit" value="Submit" />
          </li>
        </ul>
      </form>
    </div>
  );
}
