const initialState = {
    smurfs: [{
        name: '',
        age: '',
        height: ''
    }],
    isFetching: false,
    error: '',
    createSmurf: false,
    createSmurfError: '',
    smurf: ''
};

//this is the example data inside of the smurfs array
// {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm'
//   }

export const SMURFS_START = 'SMURFS_START';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_FAILURE = 'SMURFS_FAILURE';
export const SMURF_SUCCESS = 'SMURF_SUCCESS';
export const CREATE_SMURF_START = 'CREATE_SMURF_START';
export const CREATE_SMURF_SUCCESS = 'CREATE_SMURF_SUCCESS';
export const CREATE_SMURF_FAILURE = 'CREATE_SMURF_FAILURE';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURFS_START:
            return {
                ...state,
                isFetching: true
            };
        case SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false
            };
        case SMURFS_FAILURE:
            return {
                ...state,
                error: null,
                isFetching: false
            };
        case SMURF_SUCCESS:
            return {
                ...state,
                smurf: action.payload
            };
        case CREATE_SMURF_START:
            return {
                ...state,
                createSmurf: true
            };
        case CREATE_SMURF_SUCCESS:
            return {
                ...state,
                createSmurf: false,
                smurfs: action.payload
            };
        case CREATE_SMURF_FAILURE:
            return {
                ...state,
                createSmurf: false,
                createSmurfError: null
            };
        default:
            return state;
    }
};