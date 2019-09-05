import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
import './ConcertCard.css';

const formatDate = (str) => {
  // format date
  let date = str.slice(0, 10);
  let month = date.slice(5, 7);
  let day = date.slice(8);
  let year = date.slice(0, 4);
  date = `${month}/${day}/${year}`;

  // format time
  let time = str.slice(11, 16);
  time = time.split(`:`)
  let numericTime = parseInt(`${time[0]}.${time[1]}`);
  let temp = numericTime - 12;
  time = `${temp}PM`;

  return `${date} @${time}`
};

const ConcertCard = (props) => {
  
  const handleClick = e => {
    e.preventDefault();
    let clicked = props.concert.id; // found unique id for event
  // TODO: add event to user
    console.log(`Clicked: ${clicked}`);
    console.log('All of the users: ', props)
  }

 return (
  <div className="card">
    <h3>{props.concert.lineup[props.concert.lineup.length - 1]}</h3>
    <h3>{formatDate(props.concert.datetime)}</h3>
    <h4>{props.concert.venue.name}</h4>
    <h4>{props.concert.venue.city}, {props.concert.venue.region || props.concert.venue.country}</h4>
    <button id="add-event" onClick={ handleClick }> + </button>
  </div>
 )
}

export default ConcertCard;