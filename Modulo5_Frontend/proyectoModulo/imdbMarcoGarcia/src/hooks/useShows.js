import { useEffect, useState } from 'react'

export const useShows = () => {
  const [search, setSearch] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState(null)

  const bringShowList = async (event) => {
    event.preventDefault()
    const searchInput = event.target['search-input'].value
    console.log(searchInput)
    setIsLoading(true)
    console.log(isLoading)
    try {
      fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
        .then(setIsLoading(true))
        .then(search => search.json())
        .then(setSearch(search))
        .then(search => console.log(search))
        .then(setIsLoading(false))
    } catch (errors) {
      console.log(errors)
      setErrors(errors)
    } finally {
      setIsLoading(false)
      event.target.reset()
    }
  }

  const initialLoad = async () => {
    try {
      setIsLoading(true)
      fetch('https://api.tvmaze.com/search/shows?q=$batman')
        .then(search => search.json())
        .then(setSearch(search))
        .then(search => console.log(search))
        .then(setIsLoading(false))
    } catch (errors) {
      console.log(errors)
      setErrors(errors)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    initialLoad()
  }, [])

  return { bringShowList, search, isLoading, setIsLoading, errors, initialLoad }
}
