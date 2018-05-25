import React from 'react';
import { Route } from 'react-router-dom';
import Reviews from './reviews/Reviews';
import Critics from './critics/Critics';

const Routes = () => {
  return (
    <div>
      <Route exact={true} path="/" component={Reviews}/>
      <Route exact={true} path="/critics" component={Critics}/>
      <Route exact={true} path="/critics/:name" component={Critics}/>
    </div>
  )
}

export default Routes;
