import { useState, useEffect } from 'react';
import Error from "./Error.jsx"



const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [alta, setAlta] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false)

    useEffect(() => {
       if(Object.keys(paciente)){
          setNombre(paciente.nombre);
          setPropietario(paciente.propietario);
          setEmail(paciente.email);
          setAlta(paciente.alta);
          setSintomas(paciente.sintomas);
       };
    }, [paciente])

    //Generar Id

    const generarId = () => {
        const random = Math.random().toString(35)
        const fecha = Date.now().toString(35)

        return random + fecha
    }

    

    const handleSubmit = (e) => {
        e.preventDefault()

        //Valdacones del formularo

        if([nombre, propietario, email, alta, sintomas].includes('')) {
           console.log('Hay al menos un Campo vacio')
           
           setError(true)
        } else {
        setError(false)

        // Objeto Paciente

        const objetoPaciente = {
            nombre, 
            propietario, 
            email, 
            alta, 
            sintomas
            
        }

        if(paciente.id) {
            //Editando el registro
            objetoPaciente.id = paciente.id

            const pacientesActualizados = pacientes.map(pacienteAEditar => 
                pacienteAEditar.id === paciente.id ? objetoPaciente : pacienteAEditar
            )
            setPacientes(pacientesActualizados)
            setPaciente({})
        } else {
            //Nuevo registro
            objetoPaciente.id = generarId()
            setPacientes([...pacientes, objetoPaciente])
        }
        
        // Reiniciar el form

        setNombre('')
        setEmail('')
        setPropietario('')
        setSintomas('')
        setAlta('')
        
    }
    }


    return (
        <>
        <div className="md:w-1/2 lg:w-2/5 md:h-screen ">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600 font-semibold">Adminsitralos</span>
            </p>

            <form 
            onSubmit={handleSubmit}
            action="" className="bg-white shadow-md rounded-md py-10 px-5 mb-10 mx-5">
                {error ? <Error>Todos los campos son obligatorios</Error> : null}
                <div>
                    <label htmlFor="inputMascota" className="block font-bold text-gray-700 " >Nombre Mascota</label>
                    <input
                    id="inputMascota"
                    className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-md"
                    type="text"
                    placeholder="Nombre de la Mascota"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputPropietario" className="block font-bold text-gray-700 mt-10" >Nombre Propietario</label>
                    <input
                    id="inputPropietario"
                    className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-md"
                    type="text"
                    placeholder="Nombre del Propietario"
                    value={propietario}
                    onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                
                <div>
                    <label htmlFor="inputEmail" className="block font-bold text-gray-700 mt-10" >Email</label>
                    <input
                    id="inputEmail"
                    className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-md"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="inputAlta" className="block font-bold text-gray-700 mt-10" >Alta</label>
                    <input
                    id="inputAlta"
                    className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-md"
                    type="date"
                    value={alta}
                    onChange={(e) => setAlta(e.target.value)}
                   
                    />
                </div>
                <div>
                    <label htmlFor="inputSintoma" className="block font-bold text-gray-700 mt-10" >Descripción</label>
                    <textarea 
                    className="border-2 w-full p-2 mt-2 placeholder-blue-300 rounded-md"
                    id="inputSintoma"
                    placeholder="Describe los Sintomas"
                    value={sintomas}
                    onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <input 
                value={paciente.id ? "Editar Paciente": "Agregar"}
                type="submit"
                className="border-2 w-full p-2 mt-2 text-white rounded-md bg-indigo-600 cursor-pointer transition-opacity" 
                
                
                />
            </form>
        </div>
        </>
    )
}

export default Formulario