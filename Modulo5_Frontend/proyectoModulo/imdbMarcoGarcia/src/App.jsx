
import { Footer } from './components/footer'
import { Hero } from './components/hero'
import MovieCard from './components/movieCard'
import Navbar from './components/navbar'
import { useShows } from './hooks/useShows'
// import { searchSeries } from './services/searchSeries'

function App () {
  const { isLoading, errors, search } = useShows()

  const mappingShows =
    !errors &&
    search.map((series) => ({
      ...series
      // id: series[index].show.id,
      // title: series[index].show.name,
      // score: series[index].score,
      // img: series[index].show.image.original
    }))

  // setShowSearch(showSearch)
  // console.log('mapping')

  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <div className='container'>
        <div className='row'>
          <div className='col-12 bg-dark'>
            {!isLoading
              ? <p>Loading...</p>
              : isLoading && mappingShows.map(series => (
                <aside key={series.id}>
                  <MovieCard {...series} />
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
