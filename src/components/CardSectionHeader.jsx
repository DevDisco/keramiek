import React from "react";
import { useSelector } from "react-redux";

export default function CardSectionHeader(props) {
  const { category } = props;

  const text = useSelector((state) => state.text);
  console.log("text", text, category);
  if (!text) {
    return "";
  }

  const header = text[category + "_cs_header"] ?? "Hier hoort een kop";
  const caption = text[category + "_cs_text"] ?? "Hier hoort een tekst";

  return (
    <div>
      <div className="text-center">
        <h2>{header}</h2>
        <p className="lead text-muted">{caption}</p>
      </div>
    </div>
  );
}
