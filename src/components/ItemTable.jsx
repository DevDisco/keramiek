import React from "react";

export default function ItemTable(props) {
  const { item } = props;
  let prijs = item.prijs;

  if (prijs === "0") {
    prijs = "-";
  } else {
    prijs = "€" + prijs;
  }

  return (
    <table className="">
      <tbody>
        <tr>
          <td className="text-muted pe-3">Jaar</td>
          <td className="spacer">{item.bouwjaar}</td>
          <td className="text-muted pe-3">Hoogte</td>
          <td>{item.hoogte} cm</td>
        </tr>
        <tr>
          <td className="text-muted pe-3">Materiaal</td>
          <td>{item.materiaal}</td>
          <td className="text-muted pe-3">Breedte</td>
          <td>{item.breedte} cm</td>
        </tr>
        <tr>
          <td className="text-muted pe-3">Prijs</td>
          <td>{prijs}</td>
          <td className="text-muted pe-3">Diepte</td>
          <td>{item.diepte} cm</td>
        </tr>
      </tbody>
    </table>
  );
}
