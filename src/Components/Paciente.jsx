const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
  

const handleEliminar = () => {
    const respuesta = confirm("Seguro queres eliminar?")
    if(respuesta){
        eliminarPaciente(paciente.id)
    }
}
    return (
        <div className="m-3 bg-white shadow-md px-5 py-10 rounded-md">
        <p className="font-bold mb-3 text-gray-700">
            Nombre: {''}
            <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Propietario: {''}
            <span className="font-normal normal-case">{paciente.propietario}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Email: {''}
            <span className="font-normal normal-case">{paciente.email}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Alta: {''}
            <span className="font-normal normal-case">{paciente.alta}</span>
        </p>
        <p className="font-bold mb-3 text-gray-700">
            Descripción: {''}
            <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>
        <div className="flex justify-between mt-10">
            <button className="px-10 py-2 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700"
            onClick={() => setPaciente(paciente)}
            type="button">
                Editar
            </button> {''}
            <button className="px-10 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-indigo-700"
            type="button"
            onClick={handleEliminar}>
                Eliminar
            </button>
        </div>
    </div>
    )
}

export default Paciente