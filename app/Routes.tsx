import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './constants/routes.json';
import App from './containers/App';
import TodoPage from './containers/TodoPage';
import MamePage from './containers/MamePage';

export default function Routes() {
  return (
    <App>
      <Switch>
        <Route path={routes.TODO} component={TodoPage} />
        <Route path={routes.HOME} component={MamePage} />
      </Switch>
    </App>
  );
}
