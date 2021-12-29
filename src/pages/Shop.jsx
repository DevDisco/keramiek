import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CategoryHeader from "../components/CategoryHeader";
import HomeCardsItem from "../components/HomeCardsItem";
import { getShop } from "../redux/ducks/shopSlice";

export default function Shop() {
  const { c: category } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shop);

  useEffect(() => {
    dispatch(getShop({ category: category }));
  }, [dispatch, category]);

  if (!items) {
    return "";
  }

  //todo: figure out how to return an array of objects from api
  return (
    <section id="top" className="bg-altlight mt-3">
      <div className="container-lg  py-3">
        <CategoryHeader category={category} page="shop" />
        <div className="d-flex flex-wrap">
          {Object.keys(items).map((key) => (
            <HomeCardsItem key={items[key].id} item={items[key]} />
          ))}
        </div>
      </div>
    </section>
  );
}
