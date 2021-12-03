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
      <nav className="second-home-navigation">
        <ul>
          <li>
            {" "}
            <Link to="/users-list" className="link-main-list">
              Users List
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/about" className="link-main-list">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/counter" className="link-main-list">
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
