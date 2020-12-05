import React from 'react';
import {connect} from 'react-redux';
import {removeTitular} from '../action/index'
import cancha from "../cancha.svg"

export function Titulares({titulares, removeTitular}){
   //console.log(titulares)
    return(
        <section>
            <h2>Titulares</h2>
            <div className='cancha'>
                {titulares.map(t =>(
                    <article className='titular' key={t.id}>
                        <div>
                            <img src={t.photo} alt=''/>
                            <button onClick={() => removeTitular(t)}>X</button>
                        </div>
                        <p>{t.name}</p>

                    </article>
                ))}
                <img src={cancha} alt="Cancha de futbol" />
            </div>
        </section>
    )

}
const mapStateToProps = (state) =>{
    return {
       titulares: state.titulares
    }
}

export default connect(mapStateToProps,{removeTitular})(Titulares);