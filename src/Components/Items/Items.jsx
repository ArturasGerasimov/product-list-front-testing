import React from "react"
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"
import { faPen } from "@fortawesome/free-solid-svg-icons/faPen"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Items(props) {
  const handleRemove = () => {
    props.remove(props.index)
  }

  const handleCheck = () => {
    props.cross(props.index)
  }

  const handleEdit = () => {
    props.edit(props.index)
  }

  return (
    <div className="item">
      <div className={`item-name ${props.itemClass}`}>{props.itemName}</div>
      <div className="item-controls">
        <div className="button button__cross" onClick={handleCheck}>
          <FontAwesomeIcon icon={faCheck}/>
        </div>
        <div className="button button__edit" onClick={handleEdit}>
          <FontAwesomeIcon icon={faPen}/>
        </div>
        <div className="button button__remove" onClick={handleRemove}>
          <FontAwesomeIcon icon={faTimes}/>
        </div>
      </div>
    </div>
  )
}