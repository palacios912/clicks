import './App.css';
import ZeroLogo from './imagenes/imagen-zero.jpg';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';
function App() {
  const [numClicks, setNumClicks] = useState(0); 
  
  const manejarClick = () =>{
        setNumClicks (numClicks + 1);    
  };
  const reiniciarContador = () =>{
        setNumClicks(0);
  };

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
        numClicks = {numClicks} />
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
