import React, { useState, useEffect } from "react"
import Header from "../Component/Header"
import SearchComponent from "../Component/SearchComponent"
import Scroll from "../Component/Scroll"
import CatchError from "../Component/CatchError"
import CardList from "../Component/Card/CardList"

const App = () => {
  const [searchField, setSearchField] = useState("")
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchData(apiUrl) {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setData(data)
      setIsLoading(false)
    } catch (error) {
      console.error("Error fetching data: ", error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/users"

    fetchData(apiUrl)
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
        <CatchError>
          <CardList robots={filteredRobots} />
        </CatchError>
      </Scroll>
    </div>
  )
}

export { App }
