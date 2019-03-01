import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

import axios from 'axios';
import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      smurfs: [],
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        // console.log(res)
        this.setState({ smurfs: res.data })
      })
      .catch(err => {
        console.log(err)
      })
  }

  addSmurf = (e, smurf) => {
    e.preventDefault();
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(res => {
        // console.log(res, "SmurfForm axios put res")
        this.setState({
          smurfs: res.data
        });
        this.props.history.push('/');
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        this.setState({
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <NavLink to="/"><button>Home</button></NavLink>
        <NavLink to="/smurf-form"><button>Add Smurf</button></NavLink>
        <Route exact path="/" render={ props => <Smurfs {...this.state} {...props} deleteSmurf={this.deleteSmurf} /> } />
        <Route path="/smurf-form" render={ props => <SmurfForm {...props} addSmurf={this.addSmurf} /> } />
      </div>
    );
  }
}

export default App;
