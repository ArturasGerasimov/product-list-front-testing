import React, { useState, useEffect } from "react"
import AddItemForm from "./Items/AddItemForm"
import Items from "./Items/Items"
import NavBar from "./NavBar/NavBar"
import DeletedItems from "./DeletedItems/DeletedItems"
import { getFiveDaysFromNowFormatted } from "../Utils/dates"

export default function Home() {

  const [items, setItems] = useState([])
  const [deletedItems, setDeletedItems] = useState([])
  const [itemToEdit, setItemToEdit] = useState({})
  const [displayList, setDisplayList] = useState(true)
  const [displayDeletedItems, setDisplayDeletedItems] = useState(false)

  useEffect(() => {
    const storeItem = localStorage.getItem("items")
    const storeDeletedItems = localStorage.getItem("deletedItems")

    if (storeItem) {
      setItems(JSON.parse(storeItem))
    }

    if (storeDeletedItems) {
      setDeletedItems(JSON.parse(storeDeletedItems))
    }
  }, [])

  const handleSubmit = (item) => {
    const editItem = items.filter((_, i) => i === itemToEdit.index)
    let update

    if (editItem.length === 0) {
      update = [...items, { name: item, class: "" }]

      setItems(update)
    } else {
      update = [...items]

      update[itemToEdit.index].name = item
      setItems(update)
      setItemToEdit({})
    }

    localStorage.setItem("items", JSON.stringify(update))
  }

  const handlePermanentRemove = (index) => {
    const removeItem = deletedItems.filter((_, i) => i !== index)

    setDeletedItems(removeItem)

    localStorage.setItem("deletedItems", JSON.stringify(removeItem))
  }

  const handleRemove = (index) => {
    const removeItem = items.filter((_, i) => i !== index)

    handleSoftDelete(index)

    setItems(removeItem)

    localStorage.setItem("items", JSON.stringify(removeItem))
  }

  const handleSoftDelete = (index) => {
    const findDeletedItem = { ...items[index] }
    findDeletedItem.class = "deleted"
    findDeletedItem.timeToDelete = getFiveDaysFromNowFormatted()

    const updatedDeletedItems = [...deletedItems, findDeletedItem]

    setDeletedItems(updatedDeletedItems)

    localStorage.setItem("deletedItems", JSON.stringify(updatedDeletedItems))
  }

  const handleCheck = (index) => {
    const updatedItem = [...items]

    if (updatedItem[index]) {
      updatedItem[index].class = "crossed"
    }

    setItems(updatedItem)
    localStorage.setItem("items", JSON.stringify(updatedItem))
  }

  const handleEdit = (index) => {
    const editItem = items.filter((_, i) => i === index).map(e => e.name)

    setItemToEdit({ "editItem": editItem, "index": index })
  }

  const handleDisplayWindows = (value) => {
    setDisplayList(value === "displayList")
    setDisplayDeletedItems(value === "displayDeletedItems")
  }

  const handleRestore = (index) => {
    const targetedItem = deletedItems[index]

    if (targetedItem) {
      targetedItem.class = ""
      delete targetedItem.timeToDelete

      const updateItems = [...items, targetedItem]
      setItems(updateItems)
      localStorage.setItem("items", JSON.stringify(updateItems))

      const updatedDeletedItems = deletedItems.filter((_, i) => i !== index)
      setDeletedItems(updatedDeletedItems)
      localStorage.setItem("deletedItems", JSON.stringify(updatedDeletedItems))
    }
  }

  return (
    <div className="wrapper">
      <NavBar handleDisplayWindows={handleDisplayWindows}/>
      {displayDeletedItems &&
        <DeletedItems
          handleRestore={handleRestore}
          deletedItems={deletedItems}
          handlePermanentRemove={handlePermanentRemove}
        />
      }
      {displayList &&
        <div className="product-list">
          <>
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
          </>
        </div>
      }
    </div>
  )
}
