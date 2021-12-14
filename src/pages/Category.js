import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardSection from "../components/CardSection";
import { getItem } from "../redux/ducks/itemSlice";

function Category() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItem());
  }, [dispatch]);

  return (
    <>
      <CardSection category="nieuw" />
    </>
  );
}

export default Category;
