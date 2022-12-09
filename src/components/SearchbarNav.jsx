import React, { useState } from "react"
import { Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { getPillsAction } from "../redux/actions"

const SearchbarNav = () => {
  const [query, setQuery] = useState("")

  const dispatch = useDispatch()

  const handleChange = (e) => {
    console.log(e.target.value)
    setQuery(e.target.value)
  }

  return (
    <Form onSubmit={dispatch(getPillsAction(query))}>
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
