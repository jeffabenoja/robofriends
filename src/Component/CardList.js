import React from "react"
import Card from "./Card"
import { nanoid } from "nanoid"

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, index) => {
        return (
          <Card
            key={nanoid()}
            cardKey={nanoid()}
            id={robots[index].id}
            name={robots[index].name}
            email={robots[index].email}
          />
        )
      })}
    </>
  )
}

export default CardList
