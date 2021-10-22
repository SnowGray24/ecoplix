import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import AppProvider from './Providers/AppProvider';
import PrivateRoute from './components/Router/Private'

import StoreProvider from './Providers/store/Provider';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
      <StoreProvider>
      <AppProvider>
        <Switch>
          <PrivateRoute path="/" component={Home} exact={true} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </AppProvider>
      </StoreProvider>
      </Router>
    </div>
  );
}



export default App;
