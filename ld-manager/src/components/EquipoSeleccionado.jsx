import React from 'react';
import  Suplentes  from './Suplentes';
import  Titulares  from './Titulares';

export function EquipoSeleccionado(){
    return(
        <div>
            <Titulares/>
            <Suplentes/>
        </div>
    )
}

export default EquipoSeleccionado;