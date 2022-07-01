import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import "./index.css";

const ResponseForm = () => {
  const helper = useContext(UserContext);
  const [text, setText] = useState("");
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="ResponseForm">
      <form onSubmit={handleSubmit}>
        <div className="col">
          <div className="ResponseForm-text">
            Write something that's inside your head...
          </div>
          <textarea value={text} onChange={handleText}></textarea>
          <button className="ResponseForm-btn">Add</button>
          <div className="ResponseForm-desc">
            We won't require your name or any other details, your message will
            be displayed on homepage and will be auto-deleted after 24 hours
          </div>
        </div>
      </form>
    </div>
  );
};
export default ResponseForm;
