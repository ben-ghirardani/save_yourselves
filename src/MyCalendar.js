import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MyCalendar extends Component {

    constructor(props){
        super(props);
        this.state = {
            date: new Date()
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
                    Day details
                    {this.state.date.toString()}
                </div>
            </div>
        );
    }
}

export default MyCalendar;