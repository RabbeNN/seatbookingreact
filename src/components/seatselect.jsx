import React from "react"
import { useState, useEffect } from "react"
import PropTypes from 'prop-types';

function SeatSelect({ticketPrice, setTotalPrice}) {

    const [selectedSeats, setSelectedSeats] = useState([]);
    setTotalPrice(selectedSeats.length * ticketPrice);
    
    const handleSeatClick = (e) => {
        const seat = e.target;
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            const seatIndex = Array.from(seat.parentNode.children).indexOf(seat);
            if (seat.classList.contains('selected')) {
                setSelectedSeats([...selectedSeats, seatIndex]);
            } else {
                setSelectedSeats(selectedSeats.filter(index => index !== seatIndex));
            }
        }
    };

    useEffect(() => {
        const seats = document.querySelectorAll('.row .seat:not(.occupied)');
        seats.forEach(seat => seat.addEventListener('click', handleSeatClick));
        return () => {
            seats.forEach(seat => seat.removeEventListener('click', handleSeatClick));
        };
    }, [selectedSeats, handleSeatClick]);

    const totalPrice = selectedSeats.length * ticketPrice;

    return(
        <>
        <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
    <div className="container">
      <div className="screen"></div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
      </div>
      <div className="row">
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat occupied"></div>
        <div className="seat"></div>
      </div>
    </div>
    <p className="text">
      You have selected <span id="count">{selectedSeats.length}</span> seats for a price of <span
        id="total"
        >{totalPrice}Kr</span>
      {">"}</p>
        </>
    )
}
SeatSelect.propTypes = {
    ticketPrice: PropTypes.number.isRequired,
    setTotalPrice: PropTypes.func.isRequired,
};

export default SeatSelect
