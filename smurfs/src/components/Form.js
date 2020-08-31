import React, { useState } from "react";
import { connect } from "react-redux";
import { createSmurf } from "../actions";

const Form = props => {
    const [form, setForm] = useState({
        name: "",
        age: "",
        height: ""
    });

    const handleChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    }

    const Submit = e =>{
        e.preventDefault();
        props.createSmurf(formState);
    }

    return (
        <form onSubmit={Submit}>
            <p>Create a Smurf</p>
            <div className="form-input">
                <input
                onChange={handleChange}
                value={formState.name}
                type="text" name="name"
                label="name"
                />
                <input
                onChange={handleChange}
                value={form.age}
                type="number" name="age"
                label="age"
                />
                <input
                onChange={handleChange}
                value={form.height}
                type="text" name="height"
                label="height"
                />
            </div>
            <button>Add Smurf</button>
            {props.creatingSmurf && <p>Creating smurf...</p>}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        creatingSmurf: state.creatingSmurf,
    }
}

const mapDispatchToProps = {createSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
