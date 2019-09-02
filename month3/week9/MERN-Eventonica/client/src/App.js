import React from 'react';
import './App.css';
import axios from 'axios';

import keys from './keys'
import AddUser from './components/AddUser/AddUser';

class App extends React.Component {
  state = {
    input: '',
    data: null
  };

  handleOnChange = e => {
    let input = e.target.value;
    this.setState({ input });
  }; 

  handleSubmit = e => {
    e.preventDefault();
    const URL = `https://rest.bandsintown.com/artists/${this.state.input}/events?app_id=${keys.BANDSINTOWN_API_KEY}`
    axios.get(URL)
    .then(res => {
      const { data, status } = res;
      if (status == 200) {
        this.setState({ data });
      }
    })
  };

  displayConcerts = () => {
    return this.state.data.map(concert => {
      return (
        <h1>{concert.venue.name}</h1>
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Eventonica</h1>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleOnChange} />
        </form>
        {this.state.data !== null && this.displayConcerts()}
        <AddUser />
      </div>
    );
  }
}

export default App;
