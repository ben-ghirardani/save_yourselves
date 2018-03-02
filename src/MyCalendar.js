import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MyCalendar extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            // an array of objects, dayMonthYear string and value from form
            calendarNotes: null,
            calenderNotesTest: []
        }
    }

    // why does this work byt not the format below?
    onChange = date => this.setState({ date })
        // onChange(date) {
        //     this.setState({ date })
        // }

    onChangeData = data => this.setState({ calendarNotes: data })


    handleChange(event) {
        this.setState({ calendarNotes: "placeholder" })
    } 

    // create object with year, month, day
    calendarEntry(dateString) {
        let entry = {}
        entry.year = dateString.subString(11, 15);
        entry.month = dateString.slice(4, 6);
        entry.day = dateString.slice(8, 9);
        entry.message = "test message"
    }    

    formatDateString(dateString) {
        let format = dateString.toString().slice(0, 15);
        return format;
    }

    render() {
        console.log(this.state.date)
        return(
            <div className="calendar">
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
                {/* replace break with CSS styling */}
                <br></br>
                <div className="day-details">
                    {/* date string included time, slice 15 chars to limit data */}
                    {this.formatDateString(this.state.date)}
                    
                {/* add form component here */}

                </div>
            </div>
        );
    }
}

export default MyCalendar;