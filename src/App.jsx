
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Login from './components/Login';
import Home from './components/Home';
import { Redirect } from 'react-router-dom';

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Provider store={store}>
      <Router>
        <Route path="/login" component={Login} />
        <Route
          path="/home"
          render={() => (isAuth ? <Home /> : <Redirect to="/login" />)}
        />
        <input type="text" />
      </Router>
    </Provider>
  );
};

export default App;
