import React from 'react';
import {connect} from 'react-redux';
import { removeSuplente } from '../action/index';

export function Suplentes({suplentes, removeSuplente}){
    //console.log(suplentes)
    return(
        <section>
            <h2>Suplentes</h2>
            <div className='suplentes'>
                {suplentes.map(s =>(
                    <article className='suplente' key={s.id}>
                        <div>
                            <img src={s.photo} alt=''/>
                            <button onClick={() => removeSuplente(s)}>X</button>
                        </div>
                        <p>{s.name}</p>

                    </article>
                ))}
            </div>
        </section>
    )

}
const mapStateToProps = (state) =>{
    return{
        suplentes: state.suplentes    }
}

export default connect(mapStateToProps, {removeSuplente})(Suplentes);