const persona={
  nombre: 'Diego Salvador Cuellar Tejada',
  edad:21,
  FechaN:'23/12/2002',
  NumTel: 2871008941,
  carrera:'ING.Sistemas computacionales',
  email:'isc20350266@gmail.com',
  pasatiempo:[
    'VideoJuegos',
    'futbol',
    'evadir al sat',
    'cocina ',
    'Comer',
    'fabrica de mentanfetaminas'],
  CiudadN:'Tuxtepec, Oaxaca'
  }
  
  function App() {
  
    return (
      <div>
        <h1>Informacion personal</h1>
        <hr />
        <ul>
          <li>Nombre Completo: {persona.nombre}</li>
          <li>Edad: {persona.edad}</li>
          <li>Edad: {persona.FechaN}</li>
          <li>Numero de Telefono: {persona.NumTel}</li>
          <li>Carrera: {persona.carrera}</li>
          <li>Correo: {persona.email}</li>
          <li>Pasatiempos:
            <ul>
              {
              persona.pasatiempo.map((pasatiempo)=>{
                return <li key={pasatiempo}>{pasatiempo}</li>
              })
            }
            </ul>
          </li>
          <li>Lugar de nacimiento: {persona.CiudadN}</li>
        </ul>
      </div>
    )
  }
  
  export default App