import React from "react"
import { Outlet, Link } from "react-router-dom"

function About() {
  return (
    <>
      <main>
        <h2>I am About Subpage!!! That's amazing.</h2>
        <p>I was a trial page like SecondPage! Now I am one of the children of the App Route, what do you think?</p>
      </main>
      <h5>Have you been to these subpages?</h5>
      <nav className="second-home-navigation">
        <ul>
          <li>
            {" "}
            <Link to="/users-list" className="link-main-list">
              UsersList
            </Link>
          </li>
          {/* <li>
            {" "}
            <Link to="/second-home" className="link-main-list">
              Second Home
            </Link>
          </li> */}
          <li>
            {" "}
            <Link to="/counter" className="link-main-list">
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
    </>
  )
}

export default About
