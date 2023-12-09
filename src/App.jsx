import React, { useState, useEffect } from "react"
import AddItemForm from "./Components/Items/AddItemForm"
import Items from "./Components/Items/Items"
import "./Assets/Scss/App.scss"

export default function App() {

  const [items, setItems] = useState([])
  const [itemToEdit, setItemToEdit] = useState({})

  useEffect(() => {
    const storeItemName = localStorage.getItem("itemNames")
    if (storeItemName) {
      setItems(JSON.parse(storeItemName))
    }
  }, [])

  const handleSubmit = (item) => {
    const editItem = items.filter((_, i) => i === itemToEdit.index)
    let update

    if (editItem.length === 0) {
      update = [...items, {name: item, class: ""}]

      setItems(update)
    } else {
      update = [...items]

      update[itemToEdit.index].name = item
      setItems(update)
      setItemToEdit({})
    }

    localStorage.setItem("itemNames", JSON.stringify(update))
  }

  const handleRemove = (index) => {
    const removeItem = items.filter((_, i) => i !== index)

    setItems(removeItem)
    localStorage.setItem("itemNames", JSON.stringify(removeItem))
  }

  const handleCheck = (index) => {
    const updatedItem = [...items]

    if (updatedItem[index]) {
      updatedItem[index].class = "crossed"
    }

    setItems(updatedItem)
    localStorage.setItem("itemNames", JSON.stringify(updatedItem))
  }

  const handleEdit = (index) => {
    const editItem = items.filter((_, i) => i === index).map(e => e.name)

    setItemToEdit({"editItem": editItem, "index": index})
  }

  return (
    <div className="wrapper">
      <div className="product-list">
        <AddItemForm
          handleSubmit={handleSubmit}
          itemToEdit={itemToEdit}
        />
        {
          items.map((item, index) =>
            <Items
              key={index}
              itemName={item.name}
              itemClass={item.class}
              index={index}
              remove={handleRemove}
              cross={handleCheck}
              edit={handleEdit}
            />
          )
        }
      </div>
    </div>
  )
}
