import React from "react";
import '../hojas-de-estilo/Boton.css';

// function Boton(props){
//     return(
//         <button>
//             {props.texto}
            
//         </button>
//     )
// }


//sintaxis de desestructuracion!!!
//Tomar el objeto y dentro de las llaves escribimos las propiedades que estamos pasando

function Boton ({texto, esBotonDeClic, manejarClic}){
  return (
    <button 
    //operador ternario para asigar una clase de a cuerdo al boton
    //ademas se agrega un evento oneclick
      className={esBotonDeClic ? 'boton-clic' : 'boton-reiniciar'} onClick={manejarClic}>
      {texto}
     </button>
    )
}

//exportacion por defecto, solo podemos importar un elemento del archivo

export default Boton;