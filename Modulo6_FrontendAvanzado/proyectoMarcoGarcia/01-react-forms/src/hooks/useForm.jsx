// Reglas para crear un Hook de React
// 1. Custom hook es una función que debe utilizar otros hooks de React, llamase useState, useEffect
// 2. Siempre debemos usar la palabra "use" al principio para nombrar el archivo
// 3. Siempre deben ser funciones mis hooks
// 4. Siempre deben de ser reutilizables entra varios proyectos
import { useState, useEffect } from 'react'

// Mi useForm necesita que le pase como parámetro una función callback y defaults (callback, defaults)
function useForm (callback, defaults) {
  // Estado único para guardar los datos de mi formulario en un objeto
  const [input, setInput] = useState(defaults)

  // Cargar valores por defecto en la primera carga del renderizado
  // useEffect se utiliza para manejar efectos secundarios (cosas asíncronas) en los componentes de React
  useEffect(() => {
    setInput({ ...defaults })
  }, [])

  const handleInputChange = (event) => {
    // Aqui desestructuro el valor que venga en los inputs
    const { name, value } = event.target
    // Aquí fijo el set input DENTRO DE UNA FUNCION, copiando los inputs, y si hay un key que se llame name, lo actualiza, y si no, lo genera
    setInput({ ...input, [name]: value })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    callback(input)
  }
  return {
    input,
    handleInputChange,
    handleSubmit
  }
}

export default useForm
