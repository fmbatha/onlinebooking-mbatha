import React from 'react';
import Booking from './Booking';
import RoomDate from './RoomDate';

function Room(props) {


    let daysTd = props.dates.map((day, index) => {

        // get all booking for current day
        let bookinksToday = props.bookings.filter(singleBook => {
            let from_date = new Date(singleBook.from_date);
            return (from_date.toDateString() === day.toDateString() && singleBook.PropertyId === props.room.id) ? true : false;
        });

        // get all booking jsx code for current day
        let bookinksTodayJsx = bookinksToday.map(singleBook => {
            return <Booking book={singleBook} key={singleBook.id} />;
        });

        return <RoomDate key={index} day={day} room={props.room} cellWidth={props.cellWidth}>{bookinksTodayJsx}</RoomDate>
    })

    return (<tr key={props.room.id}>
        <td><div>{props.room.name}</div></td>
        {daysTd}
    </tr>);

}
export default Room;
