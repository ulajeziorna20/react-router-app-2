import React from "react"
import "./css/Step.css"

function Step(props) {
  return (
    <div>
      <form action="">
        <label htmlFor="quantity" className="label-step">
          Krok:{" "}
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          min="1"
          max="1000"
          onChange={props.stepMethod}
        />
      </form>
    </div>
  )
}

export default Step
