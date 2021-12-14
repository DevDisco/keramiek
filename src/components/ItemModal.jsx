import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem } from "../redux/ducks/itemSlice";
export default function ItemModal() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItem({ id: 5, table: "werk" }));
  }, [dispatch]);

  const item = useSelector((state) => state.item);
  console.log(item);
  return <div></div>;
}
