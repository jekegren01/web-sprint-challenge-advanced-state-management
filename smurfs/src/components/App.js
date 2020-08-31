import React, {  } from "react";
import "./App.css";
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { getSmurfs } from '../actions';

const App = () => {
  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      
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
