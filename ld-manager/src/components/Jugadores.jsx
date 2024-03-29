import React, {useEffect, createRef} from 'react';
import {connect} from 'react-redux';

import {addTitular, addSuplente} from '../action/index'


export function Jugadores ({jugadores, addTitular, addSuplente}){
   // console.log(state)
   const gridJugadores = createRef()

  useEffect(() => {
    setScrollContainer()
    document.addEventListener('click', setScrollContainer)
  }, []) 
  // Función que fija el tamaño del grid de los jugadores
  const setScrollContainer = (desktop = true) => {
    let container = gridJugadores.current
    if (container) {
      const generatedGrid = () => {
        let items = container.getElementsByClassName('jugador')
        let itemsLength = items.length
        let bp = window.matchMedia("(min-width: 640px)").matches ? window.matchMedia("(min-width: 1024px)").matches ? 4 : 2 : 1

        const getWidth = () => {
          let n = bp + (itemsLength > bp ? 0.3 : 0)
          return (itemsLength / n) * 100
        }
        return `
                display: grid;
                grid-template-columns: repeat(${itemsLength}, 225px);
                grid-gap: 1rem;
                width : ${getWidth()}%;
              `
      }
      let styles = !desktop && window.matchMedia("(min-width: 1024px)").matches ? `display: grid; grid-row-gap: 1rem;` : generatedGrid()
      container.setAttribute('style', styles)
    }
  }
    return(
        <section>
            <div className='contenedor-jugadores'>
            <h1>Jugadores</h1>
            <div ref={gridJugadores} onClick={() => setScrollContainer.bind(this)}>
                {jugadores.map(j =>(
                    <article className='jugador' key={j.id}>
                        <img  src={j.photo} alt=""/>
                        <h3>{j.name}</h3>
                        <p>{j.position}</p>
                        <div>
                            <button onClick={() => addTitular(j)}>Titular</button>
                            <button onClick={() => addSuplente(j)}>Suplente</button>
                        </div>
                    </article>
                
                ))}
                </div>
            </div>

        </section>
    )
}
const mapStateToProps = (state) =>{
    return {
        jugadores: state.jugadores
    }
}
export default connect(mapStateToProps,{addTitular, addSuplente})(Jugadores)