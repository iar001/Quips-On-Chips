import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'
import ChipsList from './components/ChipsList'
import SingleChip from './components/SingleChip';
import CreateReview from './components/CreateReview';
import EditReview from './components/EditReview';
// import ChipsHeroPic from './components/ChipsHeroPic';

import { Route, Link, withRouter } from 'react-router-dom';

import {
  loginUser,
  registerUser,
  verifyUser,
  getAllChips,
  createReview,
  readAllReviews,
  updateReview,
  chipsFlavorSort
} from './services/api-helper'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      authFormData: {
        username: "",
        email: "",
        password: ""
      },
      reviews: [],
      reviewForm: {
        cost: null,
        taste: null,
        guilt: null,
        review: ""
      },
      chips: [],
      sortedChips: []
    }
  }

  async componentDidMount() {
    const chips = await getAllChips();
    const currentUser = await verifyUser();
    const sortedChips = await chipsFlavorSort()
    if (currentUser) {
      this.setState({ currentUser, chips, sortedChips })
    }
  }


  //-------------- Reviews ------------------
  getReviews = async () => {
    const reviews = await readAllReviews();
    this.setState({
      reviews
    })
  }

  mountEditForm = async (id) => {
    const reviews = await readAllReviews()
    const review = reviews.find(element => element.id === parseInt(id));
    this.setState({
      reviewForm: review
    })
  }

  handleFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      reviewForm: {
        ...prevState.reviewForm,
        [name]: value
      }
    }))
  }

  // -------------- AUTH ------------------

  handleLoginButton = () => {
    this.props.history.push("/login")
  }

  handleLogin = async () => {
    const currentUser = await loginUser(this.state.authFormData);
    this.setState({
      currentUser
    })
    this.props.history.push(`/`)
  }

  handleRegister = async (e) => {
    e.preventDefault();
    const currentUser = await registerUser(this.state.authFormData);
    this.setState({ currentUser });
  }

  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.setState({
      currentUser: null
    })
  }

  authHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      authFormData: {
        ...prevState.authFormData,
        [name]: value
      }
    }));
  }

  render() {
    return (
      <div className="App">
        <Header
          handleLoginButton={this.handleLoginButton}
          handleLogout={this.handleLogout}
          currentUser={this.state.currentUser}
        />
        {/* <Route exact path="/" render={() => (
          <ChipsHeroPic />
        )} /> */}

        <Route exact path="/" render={() => (
          <React.Fragment>
            <div className="cover-img-div">
              <img id="cover-img" src="https://previews.123rf.com/images/niloo138/niloo1381503/niloo138150300006/38140413-potato-chips-and-snacks-on-shelves-in-a-supermarket.jpg" />
              <a href="chips-list-div">
                <h2 id="cover-img-h2">Find Chips to Quip</h2>
                <i id="arrow-down" class="material-icons animated bounce">play_for_work</i>
              </a>

            </div>
            <ChipsList
              chips={this.state.chips}
              sortedChips={this.state.sortedChips}
            />
          </React.Fragment>
        )}
        />

        <Route exact path="/chips/:chipId" render={(props) =>
          <SingleChip
            chipId={props.match.params.chipId}
            currentUser={this.state.currentUser}
            mountEditForm={this.mountEditForm}
          />}
        />

        <Route exact path="/login" render={() => (
          <Login
            handleLogin={this.handleLogin}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData} />)}
        />

        <Route exact path="/register" render={() => (
          <Register
            handleRegister={this.handleRegister}
            handleChange={this.authHandleChange}
            formData={this.state.authFormData}
          />)}
        />

        <Route
          exact path="/chips/:chipId/review" render={(props) => (
            <CreateReview
              chipId={props.match.params.chipId}
            />
          )} />

        <Route
          exact path="/chips/:chipId/review/edit/:reviewId" render={(props) => (
            <EditReview
              chipId={props.match.params.chipId}
            />
          )} />
      </div>
    );
  }

}

export default withRouter(App);
