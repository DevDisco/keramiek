import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import CardSection from "./components/CardSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />;
      <Banner />
      <CardSection />
    </>
  );
}

export default App;
