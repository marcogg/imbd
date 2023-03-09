import { useState } from 'react'

export const useShows = () => {
  const [search, setSearch] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const bringShowList = async (event) => {
    event.preventDefault()
    const searchInput = event.target['search-input'].value
    console.log(searchInput)

    try {
      const searchFetch = await fetch(`https://api.tvmaze.com/search/shows?q=${searchInput}`)
      const search = await searchFetch.json()
      setSearch(search)
      console.log(search)
      // return search
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  // useEffect(() => {
  //   bringShowList()
  // }, [])
  return { bringShowList, search, isLoading, setIsLoading }
}
