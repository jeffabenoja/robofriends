import React, { useState, useEffect } from "react"
import Header from "../Component/Header"
import SearchComponent from "../Component/SearchComponent"
import Scroll from "../Component/Scroll"
import CardList from "../Component/CardList"

const App = () => {
  const [searchField, setSearchField] = useState("")
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching data: ", error)
        setIsLoading(false)
      })
  }, [])

  const searchChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredRobots = data.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase())
  })

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div className='tc'>
      <Header />
      <SearchComponent searchChange={searchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  )
}

export { App }
