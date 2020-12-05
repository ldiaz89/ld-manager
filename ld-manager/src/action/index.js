export const addTitular = (payload) =>{
    return{
        type: 'ADD_TITULAR',
        payload
    }
}
export const addSuplente = (payload) =>{
    return{
        type: 'ADD_SUPLENTE',
        payload,
    }
}
export const removeTitular = (payload) =>{
    return{
        type: 'REMOVE_TITULAR',
        payload
    }
}
export const removeSuplente = (payload) =>{
    return{
        type: 'REMOVE_SUPLENTE',
        payload
    }
}