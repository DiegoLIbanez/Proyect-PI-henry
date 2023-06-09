import axios from "axios";

export const GET_ALL_DOGS = 'GET_ALL_DOGS';
export const GET_NAME_DOGS = 'GET_NAME_DOGS';
export const GET_TEMPERAMENT = 'GET_TEMPERAMENT';
export const ORDER_BY_DOGS = 'FILTER_BY_DOGS';
export const FILTER_TEMPERAMENTS = 'FILTER_TEMPERAMENTS';
export const FILTER_DOGS_DB = 'FILTER_DOGS_DB';
export const ORDER_WEIGTH = 'ORDER_WEIGTH';
export const DETAIL_DOGS = 'DTAIL_DOGS';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';

const desarrolloApp = "http://localhost:3001/"


export const getAllDogs = () => {
        return async function(dispatch) {
            const response = await axios(`${desarrolloApp}dogs`)
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

export const createDogs = (payload) => { 
    return async function() {
        const response = await axios.post("http://localhost:3001/dogs", payload)
         return  response
    }
}

export const datailDogs = (payload) => { 
    return async function(dispatch) {
        const response = await axios(`http://localhost:3001/dogs/${payload}`)
        return dispatch({type: DETAIL_DOGS, payload: response.data})
    }
}

export const deleteDog = (id) => { 
    return async function() {
        const response = await axios.delete(`http://localhost:3001/dogs/${id}`)
        return response
    }
}

export const cleanDetail = (data) => {
    return {
        type: CLEAN_DETAIL,
        payload: data
    }
 }

export const orderDogs = (value) => { 
    return {
        type: ORDER_BY_DOGS,
        payload: value
    }
}

export const filterTemperament = (value) => { 
    return {
        type: FILTER_TEMPERAMENTS,
        payload: value 
    }
}

export const filterDb = (value) => { 
    return {
        type: FILTER_DOGS_DB,
        payload: value
    }
}

export const OrderWeigth = (value) => { 
    return {
        type: ORDER_WEIGTH,
        payload: value
    }
}

