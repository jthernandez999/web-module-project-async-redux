import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from "../actions";
const initialState = {
    roadster: {
    name: '',
    launch_date_utc: '',
    launch_date_unix: '',
    launch_mass_kg: '',
    launch_mass_lbs: '',
    norad_id: '',
    epoch_jd: '',
    orbit_type: '',
    apoapsis_au: '',
    periapsis_au: '',
    semi_major_axis_au: '',
    eccentricity: '',
    inclination: '',
    longitude: '',
    periapsis_arg: '',
    period_days: '',
    speed_kph: '',
    speed_mph: '',
    earth_distance_km: '',
    earth_distance_mi: '',
    mars_distance_km: '',
    mars_distance_mi: '',
    wikipedia: '',
    details: ''
    }, 
    isFetching: false,
    error:''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case(FETCH_START):
            return({
                ...state, 
                roadster: {},
                isFetching: true,
                error: ''
            })
        case(FETCH_SUCCESS):
            return({
                ...state, 
                roadster: action.payload,
                isFetching: false,
                error: ''
            })
        case(FETCH_FAIL):
            return({
                ...state, 
                roadster: {}, 
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}