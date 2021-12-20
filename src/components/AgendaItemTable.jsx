import React from "react";

export default function AgendaItemTable(props) {
  const { item } = props;
  return (
    <table className="">
      <tbody>
        <tr>
          <td className="text-muted pe-3">Adres</td>
          <td className="spacer">{item.adres}</td>
        </tr>
        <tr>
          <td className="text-muted pe-3">Openingstijden</td>
          <td>{item.data_en_tijden}</td>
        </tr>
      </tbody>
    </table>
  );
}
