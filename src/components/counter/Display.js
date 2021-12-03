import React from "react"
import "./css/Display.css"

function Display(props) {
  return (
    <div className="counter-display">
      Counter: {props.counterValueToDisplay}
    </div>
  )
}

export default Display
