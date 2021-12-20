import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import HomeCardsItem from "../components/HomeCardsItem";
import { getCategory } from "../redux/ducks/categorySlice";
import { isEmpty, editTag } from "./../assets/js/helpers";

export default function Category() {
  const { c: category } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory({ category: category }));
  }, [dispatch, category]);

  const text = useSelector((state) => state.text[0]);
  const items = useSelector((state) => state.category);
  const clientData = useSelector((state) => state.client);

  if (!items || isEmpty(text) || !clientData) {
    return "";
  }

  const { ip } = clientData;
  const page = "cat";
  const headerTag = page + "_" + category + "_header";
  const header = text[headerTag]["tekst"] ?? "Hier hoort een kop";
  const captionTag = page + "_" + category + "_text";
  const caption = text[captionTag]["tekst"] ?? "Hier hoort een tekst";

  //todo: figure out how to return an array of objects from api
  return (
    <>
      <section id="top" className="bg-altlight mt-3">
        <div className="container-lg  py-3">
          <div>
            <div className="text-center">
              <h2 onClick={() => editTag(text[headerTag], ip)}>{header}</h2>
              <p
                onClick={() => editTag(text[captionTag], ip)}
                className="lead text-muted"
              >
                {caption}
              </p>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            {Object.keys(items).map((key) => (
              <HomeCardsItem key={items[key].id} item={items[key]} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
