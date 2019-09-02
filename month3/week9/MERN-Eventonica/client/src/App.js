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

  formatDate = (str) => {
    // format date
    let date = str.slice(0, 10);
    let month = date.slice(5, 7);
    let day = date.slice(8);
    let year = date.slice(0, 4);
    date = `${month}/${day}/${year}`;

    // format time
    let time = str.slice(11, 16);
    time = time.split(':')
    let numericTime = parseInt(`${time[0]}.${time[1]}`);
    let temp = numericTime - 12;
    time = `${temp}PM`;

    return `${date} @${time}`
  }

  displayConcerts = () => {
    return this.state.data.map(concert => {
      return (
        <div>
          <h3>{concert.lineup[concert.lineup.length - 1]} - {this.formatDate(concert.datetime)}</h3>
          <h4>{concert.venue.name}</h4>
          <h4>{concert.venue.city}</h4>
        </div>
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
