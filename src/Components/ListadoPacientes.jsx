import { useEffect } from "react";
import Paciente from "./Paciente"




const ListadoPacientes = ({ pacientes, setPaciente, paciente, eliminarPaciente }) => {
    

    
    return (
        <>
        <div className="md:w-1/2 lg:w-3/5">

            {
            pacientes && pacientes.length ? (
                <>
            <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>

            <p className="text-xl mt-5 mb-10 text-center">Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        </p>
            {pacientes.map((paciente) => { 
           
           return (
           <Paciente 
           key={paciente.id}
           paciente={paciente}
           setPaciente={setPaciente}
           eliminarPaciente={eliminarPaciente}
           />
           )
           })}
           </>
       ) : (
           <>
           <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
           <p className="text-xl mt-5 mb-10 text-center">Comienza a Agregar los pacientes
        </p>
           </>
           
       ) }
       
        </div>
        </>
    )
}

export default ListadoPacientes