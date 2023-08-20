import React, { useState, useEffect } from "react"

export default function CatchError(props) {
  const [hasError, setHasError] = useState(false)
  const [caught, setCaught] = useState([null, null])

  useEffect(() => {
    const [error, info] = caught
    if (error) {
      console.error("Caught an error:", error)
      setHasError(true)
    }
  }, [caught])

  const handleOnError = (error, info) => {
    setCaught([error, info])
  }

  return hasError ? (
    <h1>Ooops... Something went wrong.</h1>
  ) : (
    <div onError={handleOnError}>{props.children}</div>
  )
}
