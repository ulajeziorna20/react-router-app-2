import React, { useEffect, useState } from "react"
import "./css/ClockFunctional.css"

const ClockFunctional = (props) => {
  const [date, setDate] = useState(new Date())

  const tick = () => {
    setDate(new Date())
  }

  useEffect(() => {
    let timerID = setInterval(() => {
      tick()
    }, 1000)

    return () => {
      clearInterval(timerID)
    }
  }, [date])

  return (
    <div className="clock">
      <h4 className="date">
        Time: {date.toLocaleTimeString()}
        <span onClick={props.clockMethod} className="show-hide-clock-key">
          X
        </span>
      </h4>
    </div>
  )
}

export default ClockFunctional
