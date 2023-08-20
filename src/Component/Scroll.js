import React from "react"

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "3px solid #000",
        height: "560px",
      }}
      className='scroll'
    >
      {props.children}
    </div>
  )
}

export default Scroll
