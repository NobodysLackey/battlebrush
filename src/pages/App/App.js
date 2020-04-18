import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import PaintListPage from '../PaintListPage/PaintListPage';
import AddPaintPage from '../AddPaintPage/AddPaintPage';
import UpdatePaintPage from '../UpdatePaintPage/UpdatePaintPage';
import * as paintAPI from '../../services/paint-api';
import * as userAPI from '../../services/user-api';
import NavBar from '../../components/NavBar/NavBar';

class App extends Component {
  state = {
    user: userAPI.getUser(),
    paints: []
  };

  handleLogout = () => {
    userAPI.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({user: userAPI.getUser()});
  };

  async componentDidMount() {
    const paints = await paintAPI.index();
    this.setState({
      paints
    })
  };

  handleAddPaint = async (newPaintData) => {
    const newPaint = await paintAPI.create(newPaintData);
    this.setState(state => ({
      paints: [...this.state.paints, newPaint]
    }), () => this.props.history.push('/paintlist'));
  };

  handleDeletePaint = async (id) => {
    const deletedPaint = await paintAPI.deleteOne(id);
    this.setState({
      paints: this.state.paints.filter((paint) => paint._id !== deletedPaint._id)
    }, () => this.props.history.push('/paintlist'));
    const paints = await paintAPI.index();
    this.setState({
      paints
    });
  };

  handleUpdatePaint = async (updatedPaintData, idx, id) => {
    const updatedPaint = await paintAPI.update(updatedPaintData, idx);
    const newPaintsArray = this.state.paints.map(c =>
        c._id === id ? updatedPaint : c
      );
      this.setState(
        {paints: newPaintsArray},
        () => this.props.history.push('/paintlist')
      );
  };

  render() {
    return (
      <div className="App">
        <NavBar
          user = {this.state.user}
          handleLogout = {this.handleLogout}
        />
        <Switch>
          <Route exact path='/login' render={({ history }) => 
            <LoginPage
              history = {history}
              handleSignupOrLogin = {this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/signup' render={({ history }) => 
            <SignupPage
              history = {history}
              handleSignupOrLogin = {this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/paintlist' render={({ history }) => 
            <PaintListPage
              paints = {this.state.paints}
              handleDeletePaint = {this.handleDeletePaint}
              history = {history}
              handleSignupOrLogin = {this.handleSignupOrLogin}
            />
          }/>
          <Route exact path='/addpaint' render={({ history }) => 
            <AddPaintPage
              paints = {this.state.paints}
              history = {history}
              handleSignupOrLogin = {this.handleSignupOrLogin}
              handleAddPaint = {this.handleAddPaint}
            />
          }/>
          <Route exact path='/update' render={({history, location}) => 
            <UpdatePaintPage
              handleUpdatePaint={this.handleUpdatePaint}
              location={location}
            />
          } />
          <Route exact path='/profile' render={() => 
            userAPI.getUser() ? 
              <ProfilePage 
                user = {this.state.user}
              />
            :
              <Redirect to='/login'/>
          }/>
          <Route exact path='/' render={() =>
            <div>
              <center>
              <h1 className="welcome">Welcome to Battle Brush!</h1>
              <div className="intro">
                <h5>Use this app to keep track of all of your miniature wargaming paints. Never overbuy again! With the Battle Brush app, you'll always know exactly which paints you have on your rack at home.</h5>
              </div>
              <img className="logo" src="/logo512.png" alt="logo"></img>
              </center>
            </div>
          }/>
        </Switch>
      </div>
    );
  };
};

export default App;
