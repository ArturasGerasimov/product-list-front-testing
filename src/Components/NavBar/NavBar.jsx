import React from "react"
import Language from "../Language/Language"

export default function NavBar(props) {
  const t = props.t

  const handleDisplays = (value) => {
    props.handleDisplayWindows(value)
  }

  return (
    <div className="navigation-bar">
      <div>
        <button className="button-navigate button-navigate__primary" onClick={() => handleDisplays("displayList")}>
          {t("nav_bar.list")}
        </button>
        <button className="button-navigate button-navigate__primary" onClick={() => handleDisplays("displayDeletedItems")}>
          {t("nav_bar.deleted_items")}
        </button>
      </div>
      <Language />
    </div>
  )
}
