import React from "react"

export default function NavBar(props) {

  const handleDisplays = (value) => {
    props.handleDisplayWindows(value)
  }

  return (
    <div className="navigation-bar">
      <button className="button-navigate button-navigate__primary" onClick={() => handleDisplays("displayList")}>List</button>
      <button className="button-navigate button-navigate__primary" onClick={() => handleDisplays("displayDeletedItems")}>Deleted Items</button>
    </div>
  )
}
