import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header.js';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={HomePage}/>
          <Route path="/createpost" />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
