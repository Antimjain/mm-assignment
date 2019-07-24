import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './components/Header';
import Home from './views/Home';
import Sidebar from './components/Sidebar';
import Dashboard from './views/Dashboard';
import Support from './views/Support';
import Compaigns from './views/Compaigns'
import Course from './views/Course';

class App extends React.Component{
  render(){
    return (
      <Fragment>
        <CssBaseline />
        <Router>
          <Header/>
          <Sidebar/>
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/course-builder" component={Course} />
            <Route exact path="/campaigns" component={Compaigns} />
            <Route exact path="/support" component={Support} />
          </Switch>
        </Router>
      </Fragment>
    )
  }
}

export default App;