import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getText } from "./redux/ducks/textSlice";
import Item from "./pages/Item";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Category from "./pages/Category";
import "./App.css";
import { getClient } from "./redux/ducks/clientSlice";
import Agenda from "./pages/Agenda";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getClient());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/item/:id" element={<Item />} />
      <Route path="/a/:id" element={<Agenda />} />
      <Route path="/c/:c" element={<Category />} />
    </Routes>
  );
}

export default App;
