import React from "react";
import { useSelector } from "react-redux";
import { isEmpty, editTag } from "../assets/js/helpers";

export default function HomeCardsHeader(props) {
  const text = useSelector((state) => state.text[0]);
  const clientData = useSelector((state) => state.client);

  if (isEmpty(text) || !clientData) {
    return "";
  }

  //console.log("text", text);

  const { category, page } = props;
  const { ip } = clientData;
  const headerTag = page + "_" + category + "_header";
  const header = text[headerTag]["tekst"] ?? "Hier hoort een kop";
  const captionTag = page + "_" + category + "_text";
  const caption = text[captionTag]["tekst"] ?? "Hier hoort een tekst";

  return (
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
  );
}
