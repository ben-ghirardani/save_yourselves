import React, { Component } from 'react';
import Calendar from 'react-calendar';

class MyCalendar extends Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })

    render() {
        return(
            <div className="calendar">
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
                {/* replace break with CSS styling */}
                <br></br>
                <div>
                    Section to show values from each day when day is clicked
                </div>
            </div>
        );
    }
}

export default MyCalendar;