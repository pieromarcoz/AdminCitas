const Paciente = () => {
    return(
        <div className={"mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl"}>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Nombre: {''}
                <span className={'font-normal normal-case'}>Hook</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Propietario: {' '}
                <span className={'font-normal normal-case'}>Piero</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Email: {' '}
                <span className={'font-normal normal-case'}>correo@correo.com</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Fecha alta: {' '}
                <span className={'font-normal normal-case'}>10 Diciembre 2022</span>
            </p>
            <p className={'font-bold mb-3 text-gray-700 uppercase'}>Sintomas: {' '}
                <span className={'font-normal normal-case'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nulla qui quis ratione reprehenderit tempore. At corporis expedita inventore, ipsam officia quibusdam quisquam reiciendis reprehenderit repudiandae tempora temporibus ullam vitae!</span>
            </p>
        </div>
    )
}
export default Paciente