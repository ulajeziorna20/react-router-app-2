import React from "react"
import "./css/HomePage.css"
import { Outlet, Link } from "react-router-dom"
// import { Routes, Route } from "react-router-dom"

function HomePage() {
  return (
    <>
      <header>
        <h1>
          You are on the <span className="home-page">Home Page</span>!
        </h1>
        <h3>Where would you go now? :D</h3>
      </header>

      {/* <nav className="main-navigation">
        <ul>
          <li>
            <Link to="/users-list" className="link-main-list">
              Users List
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/second-home" className="link-main-list">
              Second Home
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
        </ul> */}
      {/* </nav> */}
      <Outlet />
    </>
  )
}

export default HomePage
