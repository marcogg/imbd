import './App.css'
import { Header } from './components/Header'
// import {Dashboard, Home, Login, Signup, Secret} from './pages'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from '@/routes/index'
function App() {
 
  return (
    <div>
    <BrowserRouter>
      <Header />
      <RoutesIndex />
    </BrowserRouter>
    </div>
  )
}

export default App
