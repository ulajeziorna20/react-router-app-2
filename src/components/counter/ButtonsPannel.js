import React from "react"
import "./css/ButtonsPanel.css"

function ButtonsPannel(props) {
  return (
    <div>
      <button
        className="add-x button"
        onClick={() => props.buttonMethod("add-x")}
      >
        Zwiększ o: <span>{props.stepValueToDisplay}</span>
      </button>
      <button
        className="reset button"
        onClick={() => props.buttonMethod("reset")}
      >
        Reset
      </button>
      <button
        className="reset button"
        onClick={() => props.buttonMethod("reinit")}
      >
        Reinit
      </button>
    </div>
  )
}

export default ButtonsPannel
