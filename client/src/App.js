import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Register from './components/Register';
import Header from './components/Header'
import ChipsList from './components/ChipsList'
import SingleChip from './components/SingleChip';
import CreateReview from './components/CreateReview';
import EditReview from './components/EditReview'

import { Route, Link, withRouter } from 'react-router-dom';

import {
  loginUser,
  registerUser,
  verifyUser,
  getAllChips,
  createReview,
  readAllReviews,
  updateReview
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
      chips: []
    }
  }

  async componentDidMount() {
    const chips = await getAllChips();
    const currentUser = await verifyUser();
    if (currentUser) {
      this.setState({ currentUser, chips })
    }
  }

  //-------------- Reviews ------------------
  getReviews = async () => {
    const reviews = await readAllReviews();
    this.setState({
      reviews
    })
  }

  newReview = async (e) => {
    e.preventDefault();
    const review = await createReview(this.props.chipId, this.props.reviewForm);
    this.setState(prevState => ({
      reviews: [...prevState.reviews, review],
      reviewForm: {
        cost: 0,
        taste: 0,
        guilt: 0,
        review: ""
      }
    }))
  }

  editReview = async () => {
    const { reviewForm } = this.state
    await updateReview(reviewForm.id, reviewForm)
    this.setState(prevState => (
      {
        reviews: prevState.reviews.map(review => {
          return review.id === reviewForm.id ? reviewForm : review
        })
      }
    ))
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
        <Route exact path="/" render={() => (
          <ChipsList
            chips={this.state.chips}
          />)}
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
              // handleFormChange={this.handleFormChange}
              // reviewForm={this.state.reviewForm}
              // newReview={this.newReview}
              chipId={props.match.params.chipId}
            />

          )} />
        
        <Route
          exact path="/chips/:chipId/review/edit/:reviewId" render={(props) => (
            <EditReview
              // handleFormChange={this.handleFormChange}
              // reviewForm={this.state.reviewForm}
              // mountEditForm={this.mountEditForm}
              // newReview={this.newReview}
              chipId={props.match.params.chipId}
            />

          )} />
        

        {/* <Route
          path="/reviews/:id"
          render={(props) => {
            const { id } = props.match.params;
            const review = this.state.reviews.find(ele => ele.id === parseInt(id));
            return <ReviewPage
              id={id}
              review={review}
              handleFormChange={this.handleFormChange}
              mountEditForm={this.mountEditForm}
              editReview={this.editReview}
              commentForm={this.state.commentForm}
            // deleteComment={this.deleteComment}
            />
          }}
        /> */}

      </div>
    );
  }

}

export default withRouter(App);
