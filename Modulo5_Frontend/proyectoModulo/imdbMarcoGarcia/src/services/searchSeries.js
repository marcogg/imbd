import { useState } from 'react'

export const searchSeries = async (event) => {
  const [search, setSearch] = useState('')
  event.preventDefault()
  const searchInput = event.target['search-input'].value
  console.log(searchInput)
  // return searchInput
  try {
    const search = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
    const searchJson = await search.json()
    console.log(searchJson)
    setSearch(search)
    return search
    // setSearch(search)
  } catch (error) {
    console.log(error)
  }
  return { search }
}
