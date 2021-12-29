import React from "react";
import { useSelector } from "react-redux";
import { isEmpty, editTag } from "./../assets/js/helpers";

export default function CategoryHeader(props) {
  const { category, page } = props;
  const text = useSelector((state) => state.text[0]);
  const clientData = useSelector((state) => state.client);

  if (isEmpty(text) || !clientData) {
    return "";
  }

  const { ip } = clientData;
  const headerTag = page + "_" + category + "_header";
  const captionTag = page + "_" + category + "_text";
  console.log("headerTag", headerTag);
  console.log("captionTag", captionTag);
  const header = text[headerTag] ? text[headerTag]["tekst"] : headerTag;
  const caption = text[captionTag] ? text[captionTag]["tekst"] : captionTag;

  return (
    <div className="text-center">
      <h2 onClick={() => editTag(text[headerTag] ?? headerTag, ip)}>
        {header}
      </h2>
      <p
        onClick={() => editTag(text[captionTag] ?? captionTag, ip)}
        className="lead text-muted"
      >
        {caption}
      </p>
    </div>
  );
}
