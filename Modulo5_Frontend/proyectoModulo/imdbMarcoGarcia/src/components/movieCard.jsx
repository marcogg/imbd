
const MovieCard = ({ ...series }) => {
  return (
    <section className='container'>
      <aside>
        <div className='card' style={{ width: '18rem' }}>
          <img src={series.show.image.medium} className='card-img-top' alt={series.show.name} />
          <div className='card-body'>
            <h5 className='card-title'>{series.show.name}</h5>
            <p className='card-text'>{series.score}</p>
            <a href='#' className='btn btn-primary'>Más información</a>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default MovieCard
