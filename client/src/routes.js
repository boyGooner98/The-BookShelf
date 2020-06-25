import React from 'react';
import { Switch, Route } from 'react-router-dom';
import BookView from './components/BookView/bookview';
import Layout from './components/Layout/layout';
import HomeContainer from './containers/HomeContainer';
import Login from './components/login/login'
import Register from './components/register/register'
import Auth from './components/auth/auth'
import Profiles from './components/profiles/profiles'

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/register' component={Auth(Register)} />
        <Route path='/profiles' component={Auth(Profiles,true)}/>
        <Route path='/login' component={Auth(Login,false)} />
        <Route path='/books/:id' exact component={Auth(BookView)} />
        <Route path='/' exact component={Auth(HomeContainer,null)} />
      </Switch>
    </Layout>
  );
};

export default Routes;
