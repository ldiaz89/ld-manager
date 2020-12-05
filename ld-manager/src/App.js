import React from 'react';
import EquipoSeleccionado from './components/EquipoSeleccionado';
import Jugadores from './components/Jugadores'
import './style/style.scss'

export function App(){
  return(
  <React.Fragment>
    <h1>LD-Manager</h1>
    <Jugadores/>
    <EquipoSeleccionado/>

  </React.Fragment>
  )
}

export default App;