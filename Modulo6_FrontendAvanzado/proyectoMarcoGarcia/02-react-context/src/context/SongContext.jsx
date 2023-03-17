import { createContext, useContext, useEffect, useState } from 'react'
import canciones from '../assets/listaCanciones.json'

// Context deals with managing the global states in React, means, that i can share data without using props

// Step 1: Crate empty context
const SongContext = createContext()

// Step 2: Create a provider for the context
// Se importa el hook useContext
// Provider manages where we get data from and how to give it to components

function SongProvider (props) {
  const [list, setList] = useState([]) // estado de las listas de canciones
  const [loading, setLoading] = useState(true) // Nos indica cuando están disponibles las canciones
  const [selectedSong, setSelectedSong] = useState({}) // Cancion seleccionada

  //   Simulating call to API
  useEffect(() => {
    setTimeout(() => {
      setList(canciones)
      setLoading(false)
    }, 2500)
  }, [])

  //   Provider always needs to return this
  // Puedo almacenar los valores en una variable para que el return sea más limpio

  const values = {
    list,
    loading,
    selectedSong,
    setSelectedSong
  }
  return (
    <SongContext.Provider value={values} {...props} />
  )
}

// El useContext se pone fuera de la función principal
// Step 3:   Give access to this context to the componenets that need it
// Se importa el hook de useContext

const useSongContext = () => {
  const context = useContext(SongContext)
  return context
}

// Step 4: export Provider and useContext
export { SongProvider, useSongContext }

// Setp 5: Debemos ir al componenete superior y envolverlo con el provider. A partir de ese componente para abajo. Ver Home y etiquetas SongProvider
