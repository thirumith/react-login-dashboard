import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={DashBoard} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));