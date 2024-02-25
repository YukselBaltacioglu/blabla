import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Button/Button";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="content" style={{ display: "flex" }}>
          <Sidebar />
          <Button />
          <Button />
          <Button />  
        </div>
        <div > 
          <Search /> 
        </div>
      </div>
    </Router>
  );
};

export default App;
