import React from "react"
import Language from "../Language/Language"
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash"
import { faList } from "@fortawesome/free-solid-svg-icons/faList"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from "react-router-dom"

export default function NavBar(props) {

  let navigate = useNavigate();

  return (
    <div className="navigation-bar">
      <div>
        <button className="button-navigate button-navigate__primary" onClick={() => navigate('/')}>
          <FontAwesomeIcon icon={faList}/>
        </button>
        <button className="button-navigate button-navigate__primary" onClick={() => navigate('/deleted-items')}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </div>
      <Language/>
    </div>
  )
}
