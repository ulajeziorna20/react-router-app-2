import React from "react"
import { Outlet, Link } from "react-router-dom"

function SecondHome() {
  return (
    <>
      <main>
        <h2>Welcome to the Second Home!</h2>
        <p>
          I was a trial homepage! Now I am one of the children of the App Route!
        </p>
      </main>
      <h5>Have you been to these subpages?</h5>
      <nav className="subpages-navigation">
        <ul>
          <li>
            {" "}
            <Link to="/users-list" className="link-subpage-list">
              Users List
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
      <br />
      <nav className="main-navigation">
        <Link to="/" className="link-main-list">
          {" "}
          ... Back to Home Page
        </Link>
      </nav>
      <Outlet />
    </>
  )
}

export default SecondHome
