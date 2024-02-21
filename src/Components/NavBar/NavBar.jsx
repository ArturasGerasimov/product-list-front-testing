import React from "react"
import Language from "../Language/Language"
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash"
import { faList } from "@fortawesome/free-solid-svg-icons/faList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function NavBar(props) {

  const handleDisplays = (value) => {
    props.handleDisplayWindows(value)
  }

  const fetchData = async (values) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/register?data=" + values, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data fetched successfully:", data);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <div className="navigation-bar">
      <div>
        <button className="button-navigate button-navigate__primary" onClick={() => fetchData( "test")}>
          api test
        </button><button className="button-navigate button-navigate__primary" onClick={() => handleDisplays("displayList")}>
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
