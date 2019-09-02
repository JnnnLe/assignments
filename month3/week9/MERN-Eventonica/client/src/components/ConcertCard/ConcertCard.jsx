import React, { Component } from 'react';
import './ConcertCard.css';

const ConcertCard = (props) => {

  const formatDate = (str) => {
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

 return (
  <div>
    <h3>{props.concert.lineup[props.concert.lineup.length - 1]} - {formatDate(props.concert.datetime)}</h3>
    <h4>{props.concert.venue.name}</h4>
    <h4>{props.concert.venue.city}</h4>
  </div>
 )
}

export default ConcertCard;