import React from "react"
import PropTypes from 'prop-types';
import { useState} from "react"

function Booking({selectedMovie, totalPrice}) {

    
    const [showForm, setShowForm] = useState(false);

    const handleBookMovieClick = () => {
        setShowForm(true);
    };

    const handleCancelClick = () => {
        setShowForm(false);
    };

    return (
        <>
            <button onClick={handleBookMovieClick}>Book movie</button>
            {showForm && (
                <div className="popup">
                    <div className="popup-content">
                        <h2>{selectedMovie}</h2>
                        <h3>Total Price: ${totalPrice}</h3>
                        <form>
                            <div>
                                <label htmlFor="name">Name:</label>
                                <input type="text" id="name" name="name" />
                            </div>
                            <div >
                                <label htmlFor="phone">Phone Number:</label>
                                <input type="text" id="phone" name="phone" />
                            </div>
                            <button type="button">Submit</button>
                            <button type="button"className="cancelbtn" onClick={handleCancelClick}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
Booking.propTypes = {
    selectedMovie: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
};

export default Booking