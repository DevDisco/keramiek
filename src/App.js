import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getText } from "./redux/ducks/textSlice";
import Item from "./pages/Item";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="item/:id" element={<Item />} />
      <Route path="cat/:id" element={<Category />} />
    </Routes>
  );
}

export default App;
