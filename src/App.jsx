import './App.css';
import React from 'react';
import { useState } from "react"
import Movieselect from './components/movieselect';
import Seatselect from './components/seatselect';
import Booking from './components/booking';

function App() {
  const [ticketPrice, setTicketPrice] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);


  return (
    <>
      <Movieselect setTicketPrice={setTicketPrice} setSelectedMovie={setSelectedMovie} />
      <Seatselect ticketPrice={ticketPrice} setTotalPrice={setTotalPrice} />
      <Booking totalPrice={totalPrice} selectedMovie={selectedMovie} />
      </>
  );
}

export default App;
