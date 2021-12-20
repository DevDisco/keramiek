export function editTag(tagData, ip) {
  if (ip === "88.159.252.251") {
    if (
      window.confirm(
        "De tag van deze tekst is " +
          tagData["tag"] +
          ". Klik op OK om deze tag in de editor te openen."
      )
    ) {
      window.open(
        "https://dcslob.nl/m_form/index.php?t=tekst&id=" + tagData["id"],
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
