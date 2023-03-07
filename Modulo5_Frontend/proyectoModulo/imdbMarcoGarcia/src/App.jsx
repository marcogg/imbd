
// import { useState } from 'react'
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import MovieCard from './components/movieCard'
import Navbar from './components/navbar'
import { useShows } from './hooks/useShows'
// import { searchSeries } from './services/searchSeries'

function App () {
  const { bringShowList, search } = useShows()
  // const [showSearch, setShowSearch] = useState([])

  const mappingShows =
    search.map((series, index) => ({
      id: series[index].show.id,
      title: series[index].show.name,
      score: series[index].score,
      img: series[index].show.image.original
    })
    )
    // setShowSearch(showSearch)
    // console.log('mapping')

  return (
    <div className='App'>
      <Navbar />
      <Hero handleSubmit={bringShowList} />
      <div className='container'>
        <div className='row'>
          <div className='col-12 bg-dark'>
            {mappingShows.length !== 0 &&
              mappingShows.map(series => (
                <aside key={series.id}>
                  <MovieCard title={series.title} score={series.score} img={series.img} />
                </aside>
              ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
