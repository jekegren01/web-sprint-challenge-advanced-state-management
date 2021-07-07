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
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const submit = e =>{
        e.preventDefault();
        props.createSmurf(form);
    }

    return (
        <form onSubmit={submit}>
            <p>Name your own Smurf</p>
            <div className="form-input">
                <input
                onChange={handleChange}
                value={form.name}
                type="text"
                name="name"
                label="name"
                placeholder='name'
                />
                <input
                onChange={handleChange}
                value={form.age}
                type="number"
                name="age"
                label="age"
                placeholder='age'
                />
                <input
                onChange={handleChange}
                value={form.height}
                type="text"
                name="height"
                label="height"
                placeholder='height'
                />
            </div>
            <button>Add Smurf</button>
            {props.createSmurf && <p>Creating smurf...</p>}
        </form>
    )
}

const mapStateToProps = state => {
    return {
        createSmurf: state.createSmurf,
    }
}

const mapDispatchToProps = {createSmurf};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
