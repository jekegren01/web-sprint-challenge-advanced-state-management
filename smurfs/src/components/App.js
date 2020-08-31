import React, {  } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getSmurfs } from '../actions';

import SmurfPage from './SmurfPage';
import Smurf from './Smurf';
import Form from './Form'

const App = (props) => {
  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <Form />
      {props.smurfs.map(smurf => {
                return <Smurf key={smurf.id} smurf={smurf}/>})}
      <Route exact path="/smurf/:id">
        <SmurfPage />
      </Route>
    </div>
  );
}


const mapStateToProps = (state) =>{
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  }
}

const mapDispatchToProps = {getSmurfs};

export default connect(mapStateToProps, mapDispatchToProps)(App);
