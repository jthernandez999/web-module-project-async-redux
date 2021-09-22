import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getRoadster, fetchFail } from '../actions';


const Roadster = (props) => {
    const { roadster, isFetching, error } = props;
    console.log('props', props)

    useEffect(() => {
        props.getRoadster();
    }, []);

    if(error) {
        return <h2>We got an error: {error} </h2>;
    }
    if (isFetching) {
        return <h2>Fetching Roadster Data for you!</h2>
    }

    const handleClick = () => {
        props.getRoadster()
    }
    
 console.log('newProps', props)
    return (
        <div className='roadster'>
            <img className='roadsterImg' src={roadster.flickr_images} height={600} width={850} alt='spaceX' />
            <h2>Name: {roadster.name}</h2>
            <h4>Details: {roadster.details}</h4>
            <h4>Launch Date: {roadster.launch_date_utc} </h4>
            <h4></h4>
            <ul className='details_list'>
                <li>Mass KG: {roadster.launch_mass_kg}</li>
                <li>Mass LBS: {roadster.launch_mass_lbs}</li>
                <li>Norad Id:{roadster.norad_id}</li>
                <li>Epoch: {roadster.epoch_jd}</li>
                <li>Orbit Type: {roadster.orbit_type}</li>
                <li>Apoapsis: {roadster.apoapsis_au}</li>
                <li>Periapsis: {roadster.periapsis_au}</li>
                <li>Semi Major Axis: {roadster.semi_major_axis_au}</li>
                <li>Eccentricity: {roadster.eccentricity}</li>
                <li>Inclination: {roadster.inclination}</li>
                <li>Longitude: {roadster.longitude}</li>
                <li>Period Days: {roadster.period_days}</li>
                <li>Speed KPH: {roadster.speed_kph}</li>
                <li>Speed MPH: {roadster.speed_mph}</li>
                <li>Earth Distance Kilometers: {roadster.earth_distance_km}</li>
                <li>Earth Distance Miles: {roadster.earth_distance_mi}</li>
                <li>Mars Distance Kilomters: {roadster.mars_distance_km}</li>
                <li>Mars Distance Miles: {roadster.mars_distance_mi}</li>
            </ul>
            <h4><a href={roadster.wikipedia}>Read More on Wikipedia</a></h4>
            <h4></h4>
            <h4></h4>



            
            {/* <button onClick={handleClick}>Get Roadster Info</button> */}
        </div>
    )
}

const mapStateToProps = state => {

    return {
        roadster: state.roadster,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getRoadster, fetchFail })(Roadster);

