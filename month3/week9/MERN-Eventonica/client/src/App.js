import React from 'react';
import './App.css';
import axios from 'axios';

import keys from './keys'
import AddUser from './components/AddUser/AddUser';

class App extends React.Component {
  state = {
    input: ''
  };

  handleOnChange = e => {
    let input = e.target.value;
    this.setState({ input });
    console.log(keys)
  }
  handleSubmit = e => {
    e.preventDefault();
    const URL = `https://rest.bandsintown.com/artists/${this.state.input}/events?app_id=${keys.BANDSINTOWN_API_KEY}`
    axios.get(URL)
    .then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <h1>Eventonica</h1>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleOnChange} />
        </form>
  
        <AddUser />
      </div>
    );
  }
}

export default App;
