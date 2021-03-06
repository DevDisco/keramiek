import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import CategoryHeader from "../components/CategoryHeader";
import HomeCardsItem from "../components/HomeCardsItem";
import { getCategory } from "../redux/ducks/categorySlice";

export default function Category() {
  const { c: category } = useParams();
  const dispatch = useDispatch();
  const items = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory({ category: category }));
  }, [dispatch, category]);

  if (!items) {
    return "";
  }

  //todo: figure out how to return an array of objects from api
  return (
    <section id="top" className="bg-altlight mt-3">
      <div className="container-lg  py-3">
        <CategoryHeader category={category} page="cat" />
        <div className="d-flex flex-wrap">
          {Object.keys(items).map((key) => (
            <HomeCardsItem key={items[key].id} item={items[key]} />
          ))}
        </div>
      </div>
    </section>
  );
}
