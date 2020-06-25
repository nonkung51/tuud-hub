import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from './components/Header/Header.js';
import ContentPage from './pages/ContentPage';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/content" component={ContentPage}/>
          <Route exact path="/createpost" />

          <Redirect to="/content" />
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default App;
