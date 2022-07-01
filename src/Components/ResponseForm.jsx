import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import "./index.css";

const ResponseForm = () => {
  const helper = useContext(UserContext);
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0) {
      navigate("/");
      return;
    }

    const item = {
      id: helper.posts.length + 1,
      text: text,
    };
    const dummyArray = helper.posts;
    dummyArray.push(item);
    helper.setPosts(dummyArray);
    console.log(helper);
    navigate("/");
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
