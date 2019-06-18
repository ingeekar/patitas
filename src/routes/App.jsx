import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Layout from '../components/Layout';
import '../styles/global.css';
import NotFound from '../pages/NotFound';
import Home from './../pages/Home';
import Login from './../pages/Login';
import Dashboard from '../pages/Dashboard';
import Pet from './../pages/Pet';
import { auth } from '../utils/firebase';
import { setUser, setLogin } from './../actions/index';
import { connect } from 'react-redux';

const App = props => {

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUser(user)
        props.setLogin(true)
      }
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/mascotas/:id" component={Pet} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/panel" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter >
    </div>

  )
}

const mapDispatchToProps = {
  setUser,
  setLogin,
}

export default connect(null, mapDispatchToProps)(App);