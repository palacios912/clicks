import React from 'react';
function Boton({texto,esBotonClick}){
    return(
        <button
        className={esBotonClick?'boton-click':'boton-reiniciar '}>
        {texto}
        </button>
    );
  
}
export default Boton;