import React, { useState } from "react"
import ButtonsPannel from "./ButtonsPannel"
import ClockFunctional from "./ClockFunctional"
import "./css/Counter.css"
import Display from "./Display"
import Step from "./Step"
import { Outlet, Link } from "react-router-dom"

const Counter = (props) => {
  const [counterValue, setCounterValue] = useState(props.initValue)
  const [stepValue, setStepValue] = useState(1)
  const [displayClock, setdisplayClock] = useState(true)

  const showHideClock = (e) => {
    setdisplayClock(!displayClock)
  }

  const stepValueChange = (e) => {
    setStepValue(+e.target.value)
  }

  const buttonHandleChange = (action) => {
    let currentCounterValue = counterValue
    console.log(currentCounterValue);
    let currentStepValue = stepValue
    // console.log(currentStepValue)
    console.log(props.initValue)

    if (action === "add-x") {
      currentCounterValue += currentStepValue
    } else if (action === "reset") {
      currentCounterValue = 0
    } else {
      currentCounterValue = props.initValue
    }

    setCounterValue(currentCounterValue)
  }

  return (
    <div>
      <div>
        <Display counterValueToDisplay={counterValue} />
        <ButtonsPannel
          buttonMethod={buttonHandleChange}
          stepValueToDisplay={stepValue}
        />
        <Step stepMethod={stepValueChange} />
      </div>
      <div>
        {displayClock ? (
          <ClockFunctional clockMethod={showHideClock} />
        ) : (
          <span onClick={showHideClock}>Show clock</span>
        )}
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
              <Link to="/about" className="link-main-list">
                About
              </Link>
            </li> */}
            {/* <li>
              {" "}
              <Link to="/second-home" className="link-main-list">
                second Home
              </Link>
            </li> */}
          </ul>
        </nav>
        <nav className="main-navigation">
          <Link to="/" className="link-main-list">
            {" "}
            ... Back to Home Page
          </Link>
        </nav>
        <Outlet />
      </div>
    </div>
  )
}

export default Counter
