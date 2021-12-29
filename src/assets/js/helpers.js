export function editTag(tagData, ip) {
  const id = tagData["id"] ?? "";
  const tag = tagData["tag"] ?? tagData;

  if (ip === "88.159.252.251") {
    if (
      window.confirm(
        "Dit is tekstanker " + tag + ".\nKlik op OK om de editor te openen."
      )
    ) {
      window.open(
        "https://dcslob.nl/m_form/index.php?t=tekst&id=" + id,
        "_blank"
      );
    }
  }
}

export function editItem(id, ip, e) {
  if (ip === "88.159.252.251" && e.target.classList.contains("card")) {
    if (window.confirm("Klik op OK om dit item in de editor te openen.")) {
      window.open(
        "https://dcslob.nl/m_form/index.php?t=werk&id=" + id,
        "_blank"
      );
    }
  }
}

export function editAgenda(id, ip, e) {
  if (ip === "88.159.252.251" && e.target.classList.contains("card")) {
    if (window.confirm("Klik op OK om dit item in de editor te openen.")) {
      window.open(
        "https://dcslob.nl/m_form/index.php?t=agenda&id=" + id,
        "_blank"
      );
    }
  }
}

export function isEmpty(obj) {
  for (var x in obj) {
    return false;
  }
  return true;
}
