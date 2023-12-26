import React from "react"

export default function DeletedItems(props) {
  return (
    <div className="deleted-items">
      <div>Deleted Items</div>
      {props.deletedItems.length === 0
        ? <div>Here are no deleted items to restore</div>
        : props.deletedItems.map((item, index) =>
          <div style={{"display": "flex"}}>
            <div key={index}>{item.name}</div>
            <div key={index}> - {item.class}</div>
            <div key={index}> - {item.timeToDelete}</div>
          </div>
        )
      }
    </div>
  )
}