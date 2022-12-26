
import './App.css';
import Boton from './componentes/Boton';
//imagen importada desde la carpeta, luego puede ser usada en el codigo por medio de llaves
import freeCodeCampLogo from './imagenes/freeCodeCampLogo.png'
import Contador from './componentes/Contador';
 //useState para agregar estado a un componente funcional
 import { useState} from 'react';

function App() {
  //Hooks:
  //trabajamos con estados 
  const[numClics, setNumClics] = useState(0);//valor inicial del numero de clics;
 
  //definir una funcion en un componente
  const manejarClic = () => {
    //console.log("clic");
    setNumClics(numClics + 1);//numero de clics anterior mas 1;
  }
  const reiniciarContador = () =>{
    //console.log("reiniciar");
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='logo' />

      </div>
    
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton 
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
        
      </div>
    </div>
  );
}

export default App;
