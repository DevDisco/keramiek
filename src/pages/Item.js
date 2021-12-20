import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ItemSection from "../components/ItemSection";
import { getItem } from "../redux/ducks/itemSlice";

export default function Item() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItem({ id: id }));
  }, [dispatch, id]);

  const item = useSelector((state) => state.item[0]);

  if (!item) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return <ItemSection item={item} />;
}
