import React, { Component } from 'react';

class SmurfForm extends Component {
  state = {
    smurf: {
        name: '',
        age: '',
        height: ''
    }
}
  
changeHandler = e => {
  e.persist();
  let value = e.target.value;
  if (e.target.name === 'age') {
      value = parseInt(value, 10);
  }

  this.setState(prevState => ({
    smurf: {
        ...prevState.smurf,
        [e.target.name]: value
    }
  }));  
};

handleSubmit = e => {
  // if (this.props.activeFriend) {
  //   this.props.updateFriend(e, this.state.friend);
  // } 
  // else {
    this.props.addSmurf(e, this.state.smurf);
  // }
  this.setState({
    smurf: {
      name: '',
      age: '',
      height: '',
    }
  });
};


  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
          />
          <input
            onChange={this.changeHandler}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
          />
          <input
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
          />
          <button>Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
