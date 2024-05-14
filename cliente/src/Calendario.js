import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarComponent.css'; // Archivo CSS personalizado

function CalendarComponent() {
    const [date, setDate] = useState(new Date());
    const markedDates = [new Date(2024, 4, 7), new Date(2024, 4, 22), new Date(2024, 4, 30)];

    const onChange = (date) => {
        setDate(date);
    }

    const tileContent = ({ date, view }) => {
        if (view === 'month') {
            const isMarked = markedDates.some((markedDate) => markedDate.getDate() === date.getDate() && markedDate.getMonth() === date.getMonth() && markedDate.getFullYear() === date.getFullYear());
            return isMarked ? <span style={{ backgroundColor: 'green', borderRadius: '100%', display: 'block', width: '15px', height: '15px' }} /> : null;
        }
    }

    return (
        <div className="calendar-container">
            <div className="container mb-5 mt-5">
                <h1 className="titule text-center border border-2 rounded-2">
                    <h1 style={{display: "inline-block", borderBottom: "3px solid darkgrey"}}>
                        <p>CALENDARIO</p>
                    </h1>
                </h1>
            </div>
            <div className="centered-calendar border border-3 rounded-1 border-black">
                <Calendar
                    onChange={onChange}
                    value={date}
                    tileContent={tileContent}
                    className="custom-calendar"
                />
            </div>
        </div>
    );
}

export default CalendarComponent;
