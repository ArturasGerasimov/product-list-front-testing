import React from "react"
import { faCheck } from "@fortawesome/free-solid-svg-icons/faCheck"
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Items(props) {
  const handleRemove = () => {
    props.remove(props.index)
  }

  const handleCross = () => {
    props.cross(props.index)
  }

  return (
    <div className="item">
      <div className={`item-name ${props.itemClass}`}>{props.itemName}</div>
      <div className="item-controls">
        <div className="item-cross" onClick={handleCross}>
          <FontAwesomeIcon icon={faCheck}/>
        </div>
        <div className="item-remove" onClick={handleRemove}>
          <FontAwesomeIcon icon={faTimes}/>
        </div>
      </div>
    </div>
  )
}