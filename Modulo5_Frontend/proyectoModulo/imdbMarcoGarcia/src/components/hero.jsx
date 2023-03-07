// import { searchSeries } from '../services/searchSeries'
// import { useShows } from '../hooks/useShows'

export const Hero = ({ handleSubmit }) => {
  return (
    <div className='hero container-fluid'>
      <div className='row'>
        <div className='col-12'>
          <h1 className='text-white'>Busca información de tus series favoritas</h1>
        </div>
      </div>
      <div className='row mt-5'>
        <div className='col-12'>
          <form onSubmit={handleSubmit}>
            <div className='form-row'>
              <input name='search-input' className='form-control form-control-lg' type='text' placeholder='buscar' aria-label='.form-control-lg example' />
              <button className='btn btn-outline-danger' type='submit'>Buscar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
