const initialState = {
  jugadores: [
    {
      id: 1,
      name: "Carlos Salazar",
      position: "Portero",
      photo:
        "https://static-img.zz.pt/jogadores/71/575271__20190605085451_carlos_salazar.jpg",
    },
    {
      id: 2,
      name: "Luis Curiel",
      position: "Portero",
      photo:
        "https://www.lavinotinto.com/cms/wp-content/uploads/2017/03/luis_curiel_deportivo_lara_torneo_apertura_2017_1349x594.jpg",
    },
    {
      id: 3,
      name: "Jesus Padron",
      position: "Portero",
      photo:
        "https://static-img.zz.pt/jogadores/73/575273__20190605085452_jesus_padron.jpg",
    },
    {
      id: 4,
      name: "Ignacion Anzola",
      position: "Defensa Central",
      photo:
        "https://static-img.zz.pt/jogadores/83/465783__20180309160935_ignacio_anzola.jpg",
    },
    {
      id: 5,
      name: "Henry Pernia",
      position: "Defensa Central",
      photo:
        "https://www.ceroacero.es/img/jogadores/69/358369_med__20160920090034_henry_pernia.jpg",
    },
    {
      id: 6,
      name: "Jonathan España",
      position: "Defensa Central",
      photo:
        "https://www.balonazos.com/wp-content/uploads/2019/07/jonathan-espa%C3%B1a-070119.jpg",
    },
    {
      id: 7,
      name: "Daniel Carrillo",
      position: "Lateral Izquierdo",
      photo:
        "https://static-img.zz.pt/jogadores/82/465782__20180309160934_daniel_carrillo.jpg",
    },
    {
      id: 8,
      name: "Jefre Vargas",
      position: "Lateral Derecho",
      photo:
        "https://static-img.zz.pt/jogadores/98/575598__20190606113804_jefre_vargas.jpg",
    },
    {
      id: 9,
      name: "Jesus Bueno",
      position: "Pivote",
      photo:
        "https://static-img.zz.pt/jogadores/54/465654__20180309092417_jesus_bueno.jpg",
    },
    {
      id: 10,
      name: "Luis Vargas",
      position: "Pivote",
      photo: "https://pbs.twimg.com/media/EBaHC7eXYAAvu8j.jpg",
    },
    {
      id: 11,
      name: "Javier Garcia",
      position: "Pivote",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Javier_Garcia.jpg/245px-Javier_Garcia.jpg",
    },
    {
      id: 12,
      name: "Juan Castellanos",
      position: "Mediocentro Ofensivo",
      photo:
        "https://www.elinformadorvenezuela.com/wp-content/uploads/2019/10/Castellanos.jpg",
    },
    {
      id: 13,
      name: "Cesar Gonzalez",
      position: "Mediocentro Ofensivo",
      photo:
        "http://gradadigital.com/home/wp-content/uploads/2015/01/cesar_peluche_gonzalez_02012014.jpg",
    },
    {
      id: 14,
      name: "Angel Sanchez",
      position: "Delantero",
      photo:
        "https://www.balonazos.com/wp-content/uploads/2020/02/dvolara-academiapc-020420.jpg",
    },
    {
      id: 15,
      name: "Freddy Vargas",
      position: "Extremo Izquierdo",
      photo:
        "https://static-img.zz.pt/jogadores/67/465567__20180308163758_freddy_vargas.jpg",
    },
    {
      id: 16,
      name: "Johan Arrieche",
      position: "Delantero",
      photo:
        "https://static-img.zz.pt/jogadores/00/575600__20190606113804_johan_arrieche.jpg",
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
