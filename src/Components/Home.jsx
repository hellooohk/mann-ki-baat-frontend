import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Card from "./Card";

const Home = () => {
  const colors = [
    "#34568B",
    "#FF6F61",
    "#6B5B95",
    "#88B04B",
    "#F7CAC9",
    "#92A8D1",
  ];
  const data = useContext(UserContext);
  return (
    <div className="Home row">
      {data.posts.length === 0 && (
        <p className="nothing">
          Nothing to show <br />
          <Link className="nothing-link" to="/post">Click on post to add your thoughts</Link>
        </p>
      )}
      {data.posts.map((item) => (
        <Card key={item.id} text={item.text} color={colors[item.id % 6]} />
      ))}
    </div>
  );
};
export default Home;
