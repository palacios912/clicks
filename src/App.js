import './App.css';
import ZeroLogo from './imagenes/imagen-zero.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';

function App() {
  const manejarClick = () =>{
        console.log("click");    
  }
  const reiniciarContador = () =>{
        console.log("reinicio");
  }

  return (
    <div className="App">
      <div className='zero-logo-contenedor'>
        <img 
        className='zero-logo'
        src={ZeroLogo}
        alt='logo de zero' />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numClicks='5' />
        <Boton
          texto='Click'
          esBotonClick={true}
          manejarClick={manejarClick}>
        </Boton>
        <Boton
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}>
        </Boton>
      </div>
    </div>
  );
}

export default App;
