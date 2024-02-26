import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Button from "./components/Button/Button";
import Search from "./components/Search/Search";
import "./App.css";

const App = () => {
  const [data, setData] = useState({ name: "" });

  // Using useEffect for single rendering
  useEffect(() => {
    fetch("/data")
      .then((res) => res.json())
      .then((apiData) => {
        // Setting data from the API
        setData({
          name: apiData.name,
          brandName: apiData.brandName,
          logo: apiData.logo,
        });
      });
  }, []);

  return (
    <Router>
      <div>
        <div>
          <Navbar />
        </div>
        <div className="content" style={{ display: "flex" }}>
          <Sidebar />
          <Button name={data.name} brandName={data.brandName} logo={data.logo}/>
          <Button name={data.name} brandName={data.brandName} logo={data.logo}/>
          <Button name={data.name} brandName={data.brandName} logo={data.logo}/>
        </div>
        <div>
          <Search />
        </div>
      </div>
    </Router>
  );
};

export default App;
