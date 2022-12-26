import React from "react";
import '../hojas-de-estilo/Contador.css'

//Desestructutaracion
//tomamos el numero de clics como un props
function Contador({numClics}){
    return (
        <div className="contador">

        {numClics}

        </div>
    )
}

export default Contador;