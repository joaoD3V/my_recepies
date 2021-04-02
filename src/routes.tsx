import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default Routes;