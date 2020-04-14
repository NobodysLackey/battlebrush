import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import PaintListPage from '../PaintListPage/PaintListPage';
import AddPaintPage from '../AddPaintPage/AddPaintPage';
import * as paintAPI from '../../services/paint-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  state = {
    user: userAPI.getUser()
  };

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  };

  async componentDidMount() {
    const paint = await paintAPI.index();
    const user = this.state.user
    user.paints = paint
    this.setState({ user });
  };

  handleAddPaint = async (paint) => {
    const newPaint = await paintAPI.create(paint)
    this.setState({
      paints: [...this.state.user.paints, newPaint]
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar
          user={this.state.user}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/paintlist' render={({ history }) => 
            <PaintListPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              paints={this.state.user.paints}
            />
          }/>
          <Route exact path='/addpaint' render={({ history }) => 
            <AddPaintPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
              handleAddPaint={this.handleAddPaint}
            />
          }/>
          <Route exact path='/profile' render={() => 
            userAPI.getUser() ? 
              <ProfilePage />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/' render={() =>
            <div className="welcome">
              <h1>Welcome to Battle Brush!</h1>
            </div>
          }/>
        </Switch>
      </div>
    );
  }
};

export default App;
