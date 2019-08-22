import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Pages/App';
import Notfound from './Pages/NotFound';
import Countries from './Pages/Countries';
import * as serviceWorker from './serviceWorker';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
});

function Application() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/countries" component={Countries} />
                    <Route component={Notfound} />
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
