import React from 'react';
import './styles.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Header from './components/header/header';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({});

export default function App() {
  const classes = useStyles();
  return (
    <Router>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route exact from="/" render={(props) => <Home {...props} />} />
          <Route
            exact
            path="/contact"
            render={(props) => <Contact {...props} />}
          />
          <Route exact path="/about" render={(props) => <About {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
