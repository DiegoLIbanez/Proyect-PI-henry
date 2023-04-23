import axios from "axios";
export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_NAME_DOGS = 'GET_NAME_DOGS';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';

export const getAllDogs = () => {
        return async function(dispatch) {
            const response = await axios("http://localhost:3001/dogs")
            return dispatch({type: GET_ALL_DOGS, payload: response.data})
        }
}


export const getNameDogs = (name) => { 
    return async function(dispatch) { 
        const response = await axios(`http://localhost:3001/dogs/?name=${name}`)
        return dispatch({type: GET_NAME_DOGS, payload: response.data})
    }

}

export const getTemperaments = () => {
    return async function(dispatch) {
        const response = await axios("http://localhost:3001/temperaments")
        return dispatch({type: GET_TEMPERAMENT, payload: response.data})
    }
}