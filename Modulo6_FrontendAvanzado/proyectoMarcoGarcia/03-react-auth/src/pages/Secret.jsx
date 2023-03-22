import {useAuthContext} from '@/context/AuthContext'

const Secret = () => {
  return (
  <>
    <h1>Secret</h1>
    {
      userPayLoad.role === 'ADMIN'
      ? <h1>Hola Admin</h1>
      : <h1>Hola Usuario</h1>
    }
  </>
  )
}

export default Secret