import { useState } from 'react'

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
        .then(console.log(isLoading))
    } catch (errors) {
      console.log(errors)
      setErrors(errors)
    } finally {
      setIsLoading(false)
      event.target.reset()
    }
  }

  // useEffect(() => {
  //   bringShowList(mapSeries)
  // }, [!isLoading])
  return { bringShowList, search, isLoading, setIsLoading, errors }
}
