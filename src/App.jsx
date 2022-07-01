import React, { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import "./App.css";
import ResponseForm from "./Components/ResponseForm";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import ContactForm from "./Components/ContactForm";
const UserContext = createContext({});
function App() {
  const [posts, setPosts] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <UserContext.Provider value={{ posts, setPosts }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/post" element={<ResponseForm />} />
            <Route path="/contact" element={<ContactForm/>}/>
            <Route path="/*" element={<ResponseForm/>}/>
          </Routes>
        </UserContext.Provider>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}
export {UserContext};
export default App;



