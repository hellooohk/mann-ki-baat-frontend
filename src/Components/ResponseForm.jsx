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
   console.log(text);
  };
  return (
    <div className="ResponseForm">
      <form onSubmit={handleSubmit}>
        <div className="col ">
          <div className="ResponseForm-text">
            Write something that you can't say to someone 😊
          </div>
          <textarea value={text} onChange={handleText}></textarea>
          <button className="ResponseForm-btn">Add</button>
          <div className="ResponseForm-text">
            We won't require your name or any other details 😎
          </div>
        </div>
      </form>
    </div>
  );
};
export default ResponseForm;
