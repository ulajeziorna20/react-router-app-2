import React, { useState } from "react"
import "./css/UsersList.css"
import ListToDisplay from "./ListToDisplay"
import { Outlet, Link } from "react-router-dom"

const UsersList = () => {
  const [name, setName] = useState("")
  const [userList, setUserList] = useState([])

  const enterNewUser = (e) => {
    setName(e.target.value)
  }

  const userListChange = () => {
    setUserList((userList) => [...userList, { name: name, key: Date.now() }])
    setName("")
  }

  const deleteUser = (id) => {
    let filteredUsers = userList.filter((user) => {
      if (user.key !== id) {
        return true
      }
      return false
    })

    setUserList(filteredUsers)
  }

  return (
    <section id="main-container">
      <h1 id="main-header">User's List</h1>
      <div>
        <span id="input-text">
          <input
            type="text"
            name="name"
            id="enter-name"
            placeholder="Enter name"
            onChange={enterNewUser}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                userListChange()
              }
            }}
            value={name}
          />
        </span>
        <button id="add-user-btn" onClick={userListChange}>
          Add User
        </button>

        <ListToDisplay userList={userList} deleteUserMth={deleteUser} />
      </div>
      <h5>Have you been to these subpages?</h5>
      <nav className="subpages-navigation">
        <ul>
          <li>
            {" "}
            <Link to="/second-home" className="link-subpage-list">
              Second Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="link-subpage-list">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/counter" className="link-subpage-list">
              Counter
            </Link>
          </li>
        </ul>
      </nav>

      <nav className="main-navigation">
        <Link to="/" className="link-main-list">
          {" "}
          ... Back to Home Page
        </Link>
      </nav>
      <Outlet />
    </section>
  )
}

export default UsersList
