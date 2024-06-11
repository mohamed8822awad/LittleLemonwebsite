
import React, { useState } from "react";

const BookingForm = (props) => {
    const[date,setDate] = useState("");
    const[times,setTimes] = useState("");
    const[guests,setGuests] = useState("");
    const[occasion,setOccasion] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        props.submitForm(e);
    }
    const handleChange = (e) => {
       setDate(e);
       props.dispatch(e);
    }
    return(
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <lable htmlFor = "book-date">choose date:</lable>
                            <input id="book-date" value={date} onChange={(e) =>handleChange(e.target.value)} type="date" required/>
                        </div>
                        <div>
                            <lable htmlFor='book-time'>choose time:</lable>
                            <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value=""> Select a Time</option>
                                {
                                    props.availableTimes.availableTimes.map(availableTimes => {return <option key={availableTimes}>{availableTimes}</option>})
                                }
                            </select>
                        </div>
                        <div>
                            <lable htmlFor="book-quests"> Number of Quests:</lable>
                            <input id="book-quests" min='1' value={guests} onChange={(e) => setGuests(e.target.value)}/>
                        </div>
                        <div>
                            <lable htmlFor="book-occasion">occasion:</lable>
                            <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)}>

                                <option>birthday</option>
                                <optipn>Annivesary</optipn>

                            </select>
                        </div>
                        <div className="btnReceive">
                            <input aria-label="On Click" type="submit" value={"Make Your Reservation"}/>
                        </div>

                    </fieldset>
                </form>
            </section>
        </header>
    );
};
 export default BookingForm; 