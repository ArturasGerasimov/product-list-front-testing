import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashRestore } from "@fortawesome/free-solid-svg-icons/faTrashRestore"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"

export default function DeletedItems(props) {
  const t = props.t

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
          ? <div className="deleted-items__message">{t("deleted_items.no_deleted_items")}</div>
          :
          <>
            <div className="deleted-items__title">
              {t("deleted_items.here_you_can_restore")}
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