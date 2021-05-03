import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LandingPage from './components/landing/LandingPage';
import Portfolio from './components/Portfolio';

import Home from './components/landing/Home';
import { authenticate } from './services/auth';
import Footer from './components/footer/Footer';
import CommodityShowPage from './components/CommodityShowPage';

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [loaded, setLoaded] = useState(false);

  const authenticateUser = async () => {
    const user = await authenticate();
    if (!user.errors) {
      setAuthenticated(true);
      setCurrentUser(user);
    }
    setLoaded(true);
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <BrowserRouter>
      <NavBar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        currentUser={currentUser}
      />
      <Switch>
        <Route path="/" exact={true}>
          <LandingPage />
        </Route>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setCurrentUser={setCurrentUser}
          />
        </Route>
        <Route path="/signup" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
          />
        </Route>
        <ProtectedRoute
          path="/portfolio/:id"
          exact={true}
          authenticated={authenticated}
          currentUser={currentUser}
        >
          <Portfolio />
        </ProtectedRoute>
        <ProtectedRoute path="/home" exact={true} authenticated={authenticated}>
          <Home currentUser={currentUser} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/commodity/:symbol"
          exact={true}
          authenticated={authenticated}
        >
          <CommodityShowPage currentUser={currentUser} authenticateUser={authenticateUser}/>
        </ProtectedRoute>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
