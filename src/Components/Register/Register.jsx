import React from "react"
import axios from "../../Utils/api"
import NavBar from "../NavBar/NavBar"
import { useTranslation } from "react-i18next"

export default function Register() {
  const { t } = useTranslation()

  const handleRegister = async () => {
    const userData = {
      name: "John Doe",
      password: "password123",
    }

    await axios.post("register", userData)
      .catch(error => {
        console.error("Registration failed:", error.response ? error.response.data : error.message)
      })
  }

  return (
    <div className="wrapper">
      <NavBar
        t={t}
      />
     register
    </div>
  )
}
