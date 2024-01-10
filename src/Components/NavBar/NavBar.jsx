import React from "react"
import Language from "../Language/Language"
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash"
import { faList } from "@fortawesome/free-solid-svg-icons/faList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavBar(props) {

  const handleDisplays = (value) => {
    props.handleDisplayWindows(value)
  }

  return (
    <div className="navigation-bar">
      <div>
        <button className="button-navigate button-navigate__primary" onClick={() => handleDisplays("displayList")}>
          <FontAwesomeIcon icon={faList}/>
        </button>
        <button className="button-navigate button-navigate__primary" onClick={() => handleDisplays("displayDeletedItems")}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
      <Language />
    </div>
  )
}
