import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ContactForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/post");

  };
  return (
    <div className="ContactForm col">
      <form onSubmit={handleSubmit}>
        <div className="col">
          <div className="col">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={handleName} />
          </div>
          <div className="col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="col">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={handleMessage}
            ></textarea>
          </div>
          <button className="ContactForm-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
