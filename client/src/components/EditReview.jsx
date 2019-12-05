import React from 'react';
import { withRouter } from 'react-router-dom';
import { updateReview, destroyReview, oneSnack } from '../services/api-helper';
import axios from 'axios';


class EditReview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: [],
      reviewForm: {
        cost: null,
        taste: null,
        guilt: null,
        review: ""
      },
      chip: []
    }
  }

  async componentDidMount() {
    const response = await axios.get(`http://localhost:3000/reviews/${this.props.match.params.reviewId}`)
    const mountReview = response.data
    const chip = await oneSnack(this.props.chipId)
    this.setState({
      reviewForm: {
        cost: mountReview.cost,
        review: mountReview.review
      },
      chip
    })
  }

  updatedReview = async (e) => {
    e.preventDefault()
    const reviewForm = this.state.reviewForm
    const review = await updateReview(this.props.match.params.reviewId, reviewForm)
    this.setState(prevState => ({
      reviews: [...prevState.reviews, review],
      reviewForm: {
        cost: 0,
        taste: 0,
        guilt: 0,
        review: ""
      }
    }))
    this.props.history.push(`/chips/${this.props.chipId}`)
  }

  deleteReview = async () => {
    await destroyReview(this.props.match.params.reviewId);
    this.setState(prevState => ({
      reviews: prevState.reviews.filter(review => review.id !== this.props.match.params.reviewId)
    }))
    this.props.history.push('/')
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

  render() {
    return (
      <div className="form">

        <div className="create-form" >
          <button
            onClick={this.deleteReview}
          >Delete Your Quip</button>
          <h2>Edit Your Score and Quip for {this.state.chip.name}</h2>
          <form onSubmit={this.updatedReview}>
            <p>Taste Score:</p>
            <select
              value={parseInt(this.state.reviewForm).taste}
              onChange={this.handleFormChange}
              name="taste">
              <option value="0.0">Edit Your Taste Score</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1.0</option>
              <option value="1.1">1.1</option>
              <option value="1.2">1.2</option>
              <option value="1.3">1.3</option>
              <option value="1.4">1.4</option>
              <option value="1.5">1.5</option>
              <option value="1.6">1.6</option>
              <option value="1.7">1.7</option>
              <option value="1.8">1.8</option>
              <option value="1.9">1.9</option>
              <option value="2">2.0</option>
              <option value="2.1">2.1</option>
              <option value="2.2">2.2</option>
              <option value="2.3">2.3</option>
              <option value="2.4">2.4</option>
              <option value="2.5">2.5</option>
              <option value="2.6">2.6</option>
              <option value="2.7">2.7</option>
              <option value="2.8">2.8</option>
              <option value="2.9">2.9</option>
              <option value="3">3.0</option>
              <option value="3.1">3.1</option>
              <option value="3.2">3.2</option>
              <option value="3.3">3.3</option>
              <option value="3.4">3.4</option>
              <option value="3.5">3.5</option>
              <option value="3.6">3.6</option>
              <option value="3.7">3.7</option>
              <option value="3.8">3.8</option>
              <option value="3.9">3.9</option>
              <option value="4">4.0</option>
              <option value="4.1">4.1</option>
              <option value="4.2">4.2</option>
              <option value="4.3">4.3</option>
              <option value="4.4">4.4</option>
              <option value="4.5">4.5</option>
              <option value="4.6">4.6</option>
              <option value="4.7">4.7</option>
              <option value="4.8">4.8</option>
              <option value="4.9">4.9</option>
              <option value="5">5.0</option>
            </select>

            <p>Guilt Score:</p>
            <select
              value={parseInt(this.state.reviewForm).guilt}
              onChange={this.handleFormChange}
              name="guilt">
              <option value="0.0">Edit Your Guilt Score</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1.0</option>
              <option value="1.1">1.1</option>
              <option value="1.2">1.2</option>
              <option value="1.3">1.3</option>
              <option value="1.4">1.4</option>
              <option value="1.5">1.5</option>
              <option value="1.6">1.6</option>
              <option value="1.7">1.7</option>
              <option value="1.8">1.8</option>
              <option value="1.9">1.9</option>
              <option value="2">2.0</option>
              <option value="2.1">2.1</option>
              <option value="2.2">2.2</option>
              <option value="2.3">2.3</option>
              <option value="2.4">2.4</option>
              <option value="2.5">2.5</option>
              <option value="2.6">2.6</option>
              <option value="2.7">2.7</option>
              <option value="2.8">2.8</option>
              <option value="2.9">2.9</option>
              <option value="3">3.0</option>
              <option value="3.1">3.1</option>
              <option value="3.2">3.2</option>
              <option value="3.3">3.3</option>
              <option value="3.4">3.4</option>
              <option value="3.5">3.5</option>
              <option value="3.6">3.6</option>
              <option value="3.7">3.7</option>
              <option value="3.8">3.8</option>
              <option value="3.9">3.9</option>
              <option value="4">4.0</option>
              <option value="4.1">4.1</option>
              <option value="4.2">4.2</option>
              <option value="4.3">4.3</option>
              <option value="4.4">4.4</option>
              <option value="4.5">4.5</option>
              <option value="4.6">4.6</option>
              <option value="4.7">4.7</option>
              <option value="4.8">4.8</option>
              <option value="4.9">4.9</option>
              <option value="5">5.0</option>
            </select>
            <p>Cost Score:</p>
            <select
              value={parseInt(this.state.reviewForm).cost}
              onChange={this.handleFormChange}
              name="cost">
              <option value="0.0">Edit Your Cost Score</option>
              <option value="0.1">0.1</option>
              <option value="0.2">0.2</option>
              <option value="0.3">0.3</option>
              <option value="0.4">0.4</option>
              <option value="0.5">0.5</option>
              <option value="0.6">0.6</option>
              <option value="0.7">0.7</option>
              <option value="0.8">0.8</option>
              <option value="0.9">0.9</option>
              <option value="1">1.0</option>
              <option value="1.1">1.1</option>
              <option value="1.2">1.2</option>
              <option value="1.3">1.3</option>
              <option value="1.4">1.4</option>
              <option value="1.5">1.5</option>
              <option value="1.6">1.6</option>
              <option value="1.7">1.7</option>
              <option value="1.8">1.8</option>
              <option value="1.9">1.9</option>
              <option value="2">2.0</option>
              <option value="2.1">2.1</option>
              <option value="2.2">2.2</option>
              <option value="2.3">2.3</option>
              <option value="2.4">2.4</option>
              <option value="2.5">2.5</option>
              <option value="2.6">2.6</option>
              <option value="2.7">2.7</option>
              <option value="2.8">2.8</option>
              <option value="2.9">2.9</option>
              <option value="3">3.0</option>
              <option value="3.1">3.1</option>
              <option value="3.2">3.2</option>
              <option value="3.3">3.3</option>
              <option value="3.4">3.4</option>
              <option value="3.5">3.5</option>
              <option value="3.6">3.6</option>
              <option value="3.7">3.7</option>
              <option value="3.8">3.8</option>
              <option value="3.9">3.9</option>
              <option value="4">4.0</option>
              <option value="4.1">4.1</option>
              <option value="4.2">4.2</option>
              <option value="4.3">4.3</option>
              <option value="4.4">4.4</option>
              <option value="4.5">4.5</option>
              <option value="4.6">4.6</option>
              <option value="4.7">4.7</option>
              <option value="4.8">4.8</option>
              <option value="4.9">4.9</option>
              <option value="5">5.0</option>
            </select>

            <p>FIx Your Quip</p>
            <textarea
              class="textarea"
              type="text"
              name="review"
              value={this.state.reviewForm.review}
              onChange={this.handleFormChange}
            />
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div >
        <div className="bag-pic-review">
          <img src={this.state.chip.bag_pic_url}/>
        </div>
      </div>
    )
  }


}

export default withRouter(EditReview);