import './App.css'
import RoutesIndex from '@/routes'
import {BrowserRouter} from 'react-router-dom'


function App() {

  return (
    <>
      <BrowserRouter>
        <RoutesIndex />
      </BrowserRouter>
    </>
  )
}

export default App
