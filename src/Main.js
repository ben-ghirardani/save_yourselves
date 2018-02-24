import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import MyCalendar from './MyCalendar';
import Goals from './Goals';

class Main extends Component {
    render() {
        return(
            <HashRouter>
                <div>
                    <h1>Save Yourselves</h1>
                        <ul className="header">
                            <li><NavLink exact to="/" >Home</NavLink></li>
                            <li><NavLink to="/my-calendar" >Calendar</NavLink></li>
                            <li><NavLink to="/goals" >Goals</NavLink></li>
                        </ul>
                            <div className="content">
                                <Route exact path="/" component={Home} />
                                <Route path="/my-calendar" component={MyCalendar} />
                                <Route path="/goals" component={Goals} />
                            </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;