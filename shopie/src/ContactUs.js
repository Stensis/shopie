import React from "react";
import "./App.css";

function ContactUs() {
  return (
    <>
     
        <form>
          <h2> GET IN TOUCH </h2>
          <input type="text" id="name" placeholder="Enter Your Name" required />
          <input
            type="email"
            id="email"
            placeholder="Enter Your Email"
            required
          />
          <input
            type="phone"
            id="phone"
            placeholder="Enter Your Phone Number"
            required
          />
         
          <textarea
            id="message"
            rows="4"
            placeholder="Write Something"
          ></textarea>
          <button type="submit">Send</button>
        </form>
      
    </>
  );
}

export default ContactUs;
