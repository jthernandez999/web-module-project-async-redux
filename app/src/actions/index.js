import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

export const getRoadster = () => dispatch => {
    dispatch(fetchStart());

    axios.get('https://api.spacexdata.com/v3/roadster')
        .then(res => {
            console.log('res', res.data)
            dispatch(fetchSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchFail(err))
        });
}


export const fetchStart = () => ({ type: FETCH_START});

export const fetchSuccess = (object) => {
    return ({ type: FETCH_SUCCESS, payload: object});
}

export const fetchFail = (error) => {
    return ({ type: FETCH_FAIL, payload: error})
}