import { GET_ALL_DOGS, GET_NAME_DOGS, GET_TEMPERAMENT, FILTER_TEMPERAMENTS, ORDER_BY_DOGS, FILTER_DOGS_DB } from "./action"

const initialState = {
     Dogs:[],
    allDogs:[],
    temperaments:[]
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
        return {
          ...state,
          allDogs: action.payload
        }
        case GET_TEMPERAMENT:
            return {
              ...state,
                temperaments: action.payload
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
        default: return state
    }
}

export default rootReducer