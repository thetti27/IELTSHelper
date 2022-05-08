import React from 'react';
import AddPlan from './addPlan';
import EditPlan from './editPlan';
import ViewPlan from './viewPlan';
import Users from './users';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appbar from './appbar';
import Casual from './casual';
import Payment from './payment';

class Navigation extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/addplan">
            <AddPlan />
          </Route>
          <Route exact path="/editplan/:id">
            <EditPlan />
          </Route>
          <Route exact path="/viewPlan">
            <ViewPlan />
          </Route>
          {/* <Route exact path="/editplan/:id">
            <EditPlan />
          </Route> */}
          {/* <Route exact path="/users">
            <Users />
          </Route> */}
          <Route exact path="/">
            <Appbar />
          </Route>
          <Route exact path="/casual">
            <Casual />
          </Route>
          <Route exact path="/payment">
            <Payment />
          </Route>
        </Switch>
      </Router>
    );
  }
}
export default () => <Navigation />;
