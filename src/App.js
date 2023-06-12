import './App.css';
import ZeroLogo from './imagenes/imagen-zero.jpg';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className="App">
      <div className='zero-logo-contenedor'>
        <img 
        className='zero-logo'
        src={ZeroLogo}
        alt='logo de zero' />
      </div>
      <div className='contenedor-principal'>
        <Boton>

        </Boton>
      </div>
    </div>
  );
}

export default App;
