import {Login, ProductDetail, Products} from '@/pages'
import {Routes, Route, Navigate} from 'react-router-dom'


const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element ={<Products />} />
      <Route path='/' element ={<Login />} />
      <Route path='/' element ={<ProductDetail />} />

    </Routes>
    
  )
}

export default RoutesIndex