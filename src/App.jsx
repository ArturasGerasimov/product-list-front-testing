import React, {useState, useEffect} from "react"
import AddItemForm from "./Components/Items/AddItemForm"
import Items from "./Components/Items/Items"
import "./Assets/Scss/App.scss"
import NavBar from "./Components/NavBar/NavBar"
import DeletedItems from "./Components/DeletedItems/DeletedItems"
import {getFiveDaysFromNow, getFiveDaysFromNowFormatted} from "./Utils/dates"

export default function App() {

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
      update = [...items, {name: item, class: ""}]

      setItems(update)
    } else {
      update = [...items]

      update[itemToEdit.index].name = item
      setItems(update)
      setItemToEdit({})
    }

    localStorage.setItem("items", JSON.stringify(update))
  }

  const handleRemove = (index) => {
    const removeItem = items.filter((_, i) => i !== index)
    handleSoftDelete(index)

    setItems(removeItem)

    localStorage.setItem("items", JSON.stringify(removeItem))
  }

  const handleSoftDelete = (index) => {
    const findDeletedItem = { ...items[index] }
    findDeletedItem.class = "deleted";
    findDeletedItem.timeToDelete = getFiveDaysFromNowFormatted()

    const updatedDeletedItems = [...deletedItems, findDeletedItem]

    setDeletedItems(updatedDeletedItems);

    localStorage.setItem("deletedItems", JSON.stringify(updatedDeletedItems))
  };

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

    setItemToEdit({"editItem": editItem, "index": index})
  }

  const handleDisplayWindows = (value) => {
    setDisplayList(value === "displayList")
    setDisplayDeletedItems(value === "displayDeletedItems")
  }

  return (
    <div className="wrapper">
      <NavBar handleDisplayWindows={handleDisplayWindows}/>
      {displayDeletedItems &&
        <DeletedItems
          deletedItems={deletedItems}
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
