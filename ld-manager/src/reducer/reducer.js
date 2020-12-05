const initialState = {
  jugadores: [
    {
      id: 1,
      name: "Carlos Salazar",
      photo:
        "https://static-img.zz.pt/jogadores/71/575271__20190605085451_carlos_salazar.jpg",
    },
    {
      id: 2,
      name: "Daniel Carrillo",
      photo:
        "https://static-img.zz.pt/jogadores/82/465782__20180309160934_daniel_carrillo.jpg",
    },
    {
      id: 3,
      name: "Ignacion Anzola",
      photo:
        "https://static-img.zz.pt/jogadores/83/465783__20180309160935_ignacio_anzola.jpg",
    },
    {
        id: 4,
        name: "Henry Pernia",
        photo:
          "https://www.ceroacero.es/img/jogadores/69/358369_med__20160920090034_henry_pernia.jpg",
      },
      {
        id: 5,
        name: "Jefre Vargas",
        photo:
        "https://static-img.zz.pt/jogadores/98/575598__20190606113804_jefre_vargas.jpg"
          },
          {
            id: 6,
            name: "Luis Vargas",
            photo:
            "https://pbs.twimg.com/media/EBaHC7eXYAAvu8j.jpg"
              },
  
    
  ],
  titulares: [],
  suplentes: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TITULAR":
      console.log(action);
      return {
        ...state,
        titulares: state.titulares.concat(action.payload),
        jugadores: state.jugadores.filter((j) => j.id !== action.payload.id),
      };
    case "ADD_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.concat(action.payload),
        jugadores: state.jugadores.filter((j) => j.id !== action.payload.id),
      };
    case "REMOVE_TITULAR":
      return {
        ...state,
        titulares: state.titulares.filter((j) => j.id !== action.payload.id),
        jugadores: state.jugadores.concat(action.payload),
      };
    case "REMOVE_SUPLENTE":
      return {
        ...state,
        suplentes: state.suplentes.filter((j) => j.id !== action.payload.id),
        jugadores: state.jugadores.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
