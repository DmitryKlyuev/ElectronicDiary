import React from 'react';
import ReactDOM from 'react-dom';
import Routes from 'routes'
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProvider} from 'services/firebase/auth'
import {CurrentUserProvider} from 'contexts/currentUser'


const App = () => {
    return (
        <AuthProvider>
            <CurrentUserProvider>
                <Router>
                    <Routes/>
                </Router>
            </CurrentUserProvider>
        </AuthProvider>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));