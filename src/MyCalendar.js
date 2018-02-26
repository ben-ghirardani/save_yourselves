import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MyCalendar extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            // an array of objects, dayMonthYear string and value from form
            calendarNotes: []
        }
    }

    onChange = date => this.setState({ date })

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
                {/* change this to a component */}
                <div className="day-details">
                    {/* date string included time, slice 15 chars to limit data */}
                    {this.state.date.toString().slice(0,15)}
                    <form>
                        <label>
                            Data:
                            {/* value should refer to the calendarNotes array, 
                            and pull anything that's already there */}
                            <input type="text" />
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default MyCalendar;