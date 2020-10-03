import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from '../src/Dashboard';
import DashboardTodo from '../src/DashboardTodo';

class AppRouting extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter >
                    <div className="AppRouting" >
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route exact path='/weather' component={DashboardTodo} />


                        </Switch>
                    </div>
                </BrowserRouter>

            </div>
        )
    }
}

export default AppRouting;
