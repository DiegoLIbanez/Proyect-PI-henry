import { GET_ALL_DOGS, GET_NAME_DOGS, GET_TEMPERAMENT, FILTER_TEMPERAMENTS, ORDER_BY_DOGS, CLEAN_DETAIL, FILTER_DOGS_DB, DETAIL_DOGS, ORDER_WEIGTH } from "./action"

const initialState = {
     Dogs:[],
    allDogs:[],
    temperaments:[],
    detailDogs:[],
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
              ...state,
                allDogs: action.payload,
                Dogs: action.payload
            }
        case GET_NAME_DOGS: 
        return { ...state, allDogs: action.payload }
        case GET_TEMPERAMENT:
          
            return {
             ...state,
                temperaments: action.payload
        }
        case CLEAN_DETAIL: 
        return {
          ...state,
            detailDogs: []
        }
        case DETAIL_DOGS:
            return {
              ...state,
              detailDogs: action.payload
        }
        case FILTER_TEMPERAMENTS:
            const dogAll = state.Dogs
            const filterDogs = action.payload === "All" ? dogAll : dogAll.filter(items => items.temperaments?.includes(action.payload))
          return {
            ...state,
            allDogs: filterDogs
          }
        case FILTER_DOGS_DB:
            const dogAllDb = state.Dogs
            const createdFilter = action.payload === "created" ? dogAllDb.filter(element => element.createdInDb) : dogAllDb.filter(el => !el.createdInDb)
           return {
            ...state,
            allDogs: action.payload === "All" ? state.Dogs : createdFilter
          }
        case ORDER_BY_DOGS:
            let sortArr = action.payload === "asc" ?
            state.Dogs.sort(function(a, b) {
              if(a.name > b.name) return 1;
              if(b.name > a.name) return -1;
              return 0
            }): state.Dogs.sort(function(a, b) {
              if(a.name > b.name) return -1
              if(b.name > a.name) return 1
              return 0;
            })
            return {
             ...state,
              allDogs: sortArr
          }
        case ORDER_WEIGTH:
            if (action.payload === "Maximo") {
                return {
                    ...state,
                    allDogs: ordenarPesoFinalMaximo([...state.Dogs])
                }
            } else{
                return {
                    ...state,
                    allDogs: ordenarPesoFinalMinimo([...state.Dogs])
                }
            }
            
            default:return state
    }
}


export const ordenarPesoFinalMaximo=(array)=>{

  for (let i = 0; i < array.length; i++) {

      var miIndex = i;

      for (let j = i + 1; j < array.length; j++) {

          let pesoDefinitivoJ=0;
          const pesosdeJ = array[j].weight.split(" - ");
          const peso1deJ = parseInt(pesosdeJ[0]);
          const peso2deJ = parseInt(pesosdeJ[1]);
          peso1deJ > peso2deJ ? pesoDefinitivoJ = peso1deJ : pesoDefinitivoJ = peso2deJ;

          let pesoDefinitivoI = 0;
          const pesosdeI = array[miIndex].weight.split(" - "); 
          const peso1deI = parseInt(pesosdeI[0]); 
          const peso2deI = parseInt(pesosdeI[1]); 
          peso1deI > peso2deI ? pesoDefinitivoI = peso1deI : pesoDefinitivoI = peso2deI;

          

          if (pesoDefinitivoJ < pesoDefinitivoI) miIndex = j;
      }
      var aux = array[i];
      array[i] = array[miIndex];
      array[miIndex] = aux;
  }

  
  return array;
  
}


export const ordenarPesoFinalMinimo = (array) => {

  for (let i = 0; i < array.length; i++) {

      var miIndex = i;

      for (let j = i + 1; j < array.length; j++) {

          let pesoDefinitivoJ = 0;
          const pesosdeJ = array[j].weight.split(" - ");
          const peso1deJ = parseInt(pesosdeJ[0]);
          const peso2deJ = parseInt(pesosdeJ[1]);
          peso1deJ < peso2deJ ? pesoDefinitivoJ = peso1deJ : pesoDefinitivoJ = peso2deJ;

          let pesoDefinitivoI = 0;
          const pesosdeI = array[miIndex].weight.split(" - ");
          const peso1deI = parseInt(pesosdeI[0]);
          const peso2deI = parseInt(pesosdeI[1]);
          peso1deI < peso2deI ? pesoDefinitivoI = peso1deI : pesoDefinitivoI = peso2deI;



          if (pesoDefinitivoJ < pesoDefinitivoI) miIndex = j;
      }

      var aux = array[i];
      array[i] = array[miIndex];
      array[miIndex] = aux;
  }


  return array;

}

export default rootReducer