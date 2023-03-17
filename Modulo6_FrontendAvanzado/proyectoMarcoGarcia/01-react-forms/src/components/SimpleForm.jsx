import logo from '../assets/react.svg'
import React, { useState, useEffect } from 'react'

const SimpleForm = () => {
  // Paso 1:  Crear los estados donde guardareé la información tecleada
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Paso 3: Crear la función que se ejecutará al hacer click en el botón de envío del formulario
  const handleSubmit = (event) => {
    event.preventDefault()
    const submittedData = JSON.stringify({
      email,
      password
    })
    console.log(submittedData)
  }

  // Paso 4// hardcodear una prueba
  useEffect(() => {
    setTimeout(() => {
      const info = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 25,
        genero: 'M',
        email: 'juanperez@gmail.com',
        password: 'gatito123'
      }
      setDatos(info)
    }, 5000)
  }, [])
  // Paso 2: Crear el formulario base en JSX
  return (
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        <form>
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' placeholder='correo@mail.com' id='email' onChange={(event) => setEmail(event.target.value)} />

          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password' onChange={(event) => setPassword(event.target.value)} />
          <button onClick={handleSubmit}>
            Iniciar Sesion
          </button>
        </form>
      </div>
    </div>
  )
}

export default SimpleForm
