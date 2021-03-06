import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Recepies from './pages/Recepies';
import NewRecepie from './pages/NewRecepie';
import RecepieInformation from './pages/RecepieInformation';
import RecepiesSearch from './pages/RecepiesSearch';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/recepies" component={Recepies} />
      <Route path="/new-recepie" component={NewRecepie} />
      <Route path="/recepie-information" exact component={RecepieInformation} />
      <Route path="/recepies-search" exact component={RecepiesSearch} />
    </Switch>
  );
};

export default Routes;