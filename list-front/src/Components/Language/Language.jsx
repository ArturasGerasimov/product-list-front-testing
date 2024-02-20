import React from "react"
import Cookies from "js-cookie"
import i18next from "i18next"
import LtFlag from "../../Assets/Pictures/flags/lt.svg"
import UkFlag from "../../Assets/Pictures/flags/uk.svg"
import UaFlag from "../../Assets/Pictures/flags/ua.svg"

const changeLanguage = (language) => {
  Cookies.set("lang", language, { expires: 365 })
  i18next.changeLanguage(language)
}

export default function Language() {
  return (
    <div className="language-selectors">
      <button className="language-selectors__lang" onClick={() => changeLanguage('en')}>
        <img src={UkFlag} alt="Uk Flag"/>
      </button>
      <button className="language-selectors__lang" onClick={() => changeLanguage('lt')}>
        <img src={LtFlag} alt="Lt Flag"/>
      </button>
      <button className="language-selectors__lang" onClick={() => changeLanguage('ua')}>
        <img src={UaFlag} alt="Ua Flag"/>
      </button>
    </div>
  )
}