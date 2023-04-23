import { GET_ALL_DOGS, GET_NAME_DOGS, GET_TEMPERAMENT } from "./action"

const initialState = {
    allDogs:[],
    temperaments:[]
}


const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_DOGS:
            return {
              ...state,
                allDogs: action.payload
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
        default: return state
    }
}

export default rootReducer