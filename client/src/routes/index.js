import React, { Fragment } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from '../pages/Home';
import Items from '../pages/Items';
import Share from '../pages/Share';
import Profile from '../pages/Profile';


export default () => (
  <Fragment>
    {/* @TODO: Add your menu component here */}
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/items" component={Items} />
      <Route path="/welcome" component={Home} />
      <Route path="/share" component={Share} />
      <Route path="/profile/:id" component={Profile} />
      {/* <Route component={NotFound} /> */}
      {/**
       * @TODO: Define routes here for: /items, /profile, /profile/:userid, and /share
       *
       * Provide a wildcard redirect to /items for any undefined route using <Redirect />.
       *
       * Later, we'll add logic to send users to one set of routes if they're logged in,
       * or only view the /welcome page if they are not.
       */}
    </Switch>
    {/* <Route
      path={`${match.url}/:name`}
      render={({ match }) => <h2>{match.params.name}</h2>}
    /> */}
  </Fragment>
);
