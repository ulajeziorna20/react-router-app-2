import React from "react"
import "./css/ListToDisplay.css"

const ListToDisplay = (props) => {
  let listToDisplayJSX = props.userList.map((user) => {
    return (
      <li id="user-item" key={user.key} className="list-element">
        {user.name}
        <span
          className="x-button"
          onClick={() => props.deleteUserMth(user.key)}
        >
          X
        </span>
      </li>
    )
  })

  return <ul className="user-list">{listToDisplayJSX} </ul>
}

export default ListToDisplay
