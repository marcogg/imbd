// import { useState } from 'react'

const MovieCard = ({ title = 'No title', score = 'N/A', img }) => {
  // const [searchShow, setSearchShow]=useState()
  // bringMovies(searchSeries)
  return (
    <section className='container'>
      <aside>
        <div className='card' style={{ width: '18rem' }}>
          <img src={img} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{score}</p>
            <a href='#' className='btn btn-primary'>Ok</a>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieCard
