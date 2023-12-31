import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashRestore } from "@fortawesome/free-solid-svg-icons/faTrashRestore"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"

export default function DeletedItems(props) {

  const handleRestore = (index) => {
    props.handleRestore(index)
  }

  const handleRemove = (index) => {
    props.handlePermanentRemove(index)
  }

  return (
    <div className="deleted-items">
      {
        props.deletedItems.length === 0
          ? <div className="deleted-items__message">No deleted items to restore</div>
          :
          <>
            <div className="deleted-items__title">
              Here you can restore deleted items
            </div>
            {
              props.deletedItems.map((item, index) =>
                <div className="deleted-items__item" key={index}>
                  <div>{item.name}</div>
                  <div className="deleted-items__controls">
                    <div className="button button__red" onClick={() => handleRemove(index)}>
                      <FontAwesomeIcon icon={faTimes}/>
                    </div>
                    <div className="button button__green" onClick={() => handleRestore(index)}>
                      <FontAwesomeIcon icon={faTrashRestore}/>
                    </div>
                  </div>
                </div>
              )
            }
          </>
      }
    </div>
  )
}