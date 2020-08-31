import {
    SMURFS_START,   
    SMURFS_SUCCESS,
    SMURFS_FAILURE,
    SMURF_SUCCESS,
    CREATE_SMURF_START,
    CREATE_SMURF_SUCCESS,
    CREATE_SMURF_FAILURE,
} from '../reducers';

import axios from 'axios';

export const getSmurfs = () => dispatch =>{
    dispatch({type: SMURFS_START});
        axios
        .get("http://localhost:3333/smurfs")
        .then((res) => {
            dispatch({
                type: SMURFS_SUCCESS, 
                payload: res.data
            })
            console.log(res)})
        .catch((err) => {
            dispatch({
                type: SMURFS_FAILURE
            })
            console.log(err)
    });
};

export const createSmurf = smurf => dispatch =>{
    dispatch({type: CREATE_SMURF_START});
        axios
        .post("http://localhost:3333/smurfs", smurf)
        .then((res) => {
            dispatch({
                type: CREATE_SMURF_SUCCESS,
                payload: res.data
            })
            console.log(res)
        })
        .catch((err) => {
            dispatch({
                type: CREATE_SMURF_FAILURE
            })
            console.log(err)
    });
};

export const getSmurf = id => dispatch =>{
    axios
    .get(`http://localhost:3333/smurfs/${id}`)
    .then((res)=>{
        dispatch({
            type: SMURF_SUCCESS, 
            payload: res.data
        })
        console.log(res)
    })
    .catch((err) => {
        dispatch({
            type: SMURFS_FAILURE
        })
        console.log(err)
    });
};