import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getPillsAction } from "../../redux/actions"

const SearchbarNav = () => {
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()

  const handleChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(getPillsAction(query))
    console.log("--------------search submitted--------------")
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="search here"
      />
    </Form>
  )
}
export default SearchbarNav
