import { useState, useEffect } from 'react'
import './index.css'
import Header from './Components/Header.jsx'
import ListadoPacientes from './Components/ListadoPacientes'
import Formulario from './Components/Formulario'

function App() {

  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
    const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? []
      setPacientes(pacientesLS)
      }
      obtenerLS()
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

 
  const eliminarPaciente = (id) => {
       const pacientesActualizados = pacientes.filter(pacienteAEliminar => 
        pacienteAEliminar.id !== id
       )

       setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />

      <div className='mt-12 md:flex'>
      <Formulario 
      setPacientes={setPacientes}
      pacientes={pacientes}
      paciente={paciente}
      setPaciente={setPaciente}/>
      <ListadoPacientes
      paciente={paciente}
      setPaciente={setPaciente}
      pacientes={pacientes}
      eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
