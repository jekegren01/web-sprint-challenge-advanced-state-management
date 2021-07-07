import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {connect} from "react-redux";
import {getSmurf} from "../actions";

const SmurfPage = props => {

    const {id} = useParams();

    useEffect(()=>{
        props.getSmurf(id);
    }, [])

    return (
        <div className="smurf-page">
            <div>
                <h2>{props.smurf.name}</h2>
                <p>Age: {props.smurf.age}</p>
                <p>Height: {props.smurf.height}</p>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return  {
        smurf: state.smurf
    }
}

const mapDispatchToProps = {getSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(SmurfPage);