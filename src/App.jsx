import React, {useState, useEffect} from "react"
import AddItemForm from "./Components/Items/AddItemForm"
import Items from "./Components/Items/Items"
import "./App.css"

export default function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const storeItemName = localStorage.getItem("itemNames")
    if (storeItemName) {
      setItems(JSON.parse(storeItemName))
    }
  }, [])

  const handleSubmit = (newItem) => {
    const updatedItems = [...items, {name: newItem, class: ""}]
    setItems(updatedItems)
    localStorage.setItem("itemNames", JSON.stringify(updatedItems))
  }

  const handleRemove = (index) => {
    const updatedItems = items.filter((_, i) => i !== index)

    setItems(updatedItems)
    localStorage.setItem("itemNames", JSON.stringify(updatedItems))
  }

  const handleCross = (index) => {
    const updatedItems = [...items]

    if (updatedItems[index]) {
      updatedItems[index].class = "crossed"
    }

    setItems(updatedItems)
    localStorage.setItem("itemNames", JSON.stringify(updatedItems))
  }

  return (
    <div className="wrapper">
      <div className="product-list">
        <AddItemForm handleSubmit={handleSubmit}/>
        {
          items.map((item, index) =>
            <Items
              key={index}
              itemName={item.name}
              itemClass={item.class}
              index={index}
              remove={handleRemove}
              cross={handleCross}
            />
          )
        }
      </div>
    </div>
  )
}
