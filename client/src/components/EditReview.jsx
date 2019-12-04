import React from 'react';
import { withRouter } from 'react-router-dom';
import { updateReview } from '../services/api-helper';

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
      chips: []
    }
  }

  newReview = async (e) => {
    e.preventDefault();
    const reviewForm = this.state.reviewForm
    const review = await createReview(this.props.chipId, reviewForm);
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

  editReview = async () => {
    const { reviewForm } = this.state
    await updateReview(reviewForm.id, reeviwForm)
    this.setState(prevState => (
      {
        reviews: prevState.reviews.map(review => {
          return review.id === reviewForm.id ? reviewForm : review
        })
      }
    ))
    this.props.history.push(`/chips/${this.props.chipId}`)
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

      <div className="create-form" >
        <h2>Write a New Review</h2>
        <form onSubmit={this.editReview}>
          <p>Taste Score:</p>
          <select
            value={parseInt(this.state.reviewForm).taste}
            onChange={this.handleFormChange}
            name="taste">
            <option value="0.0">ZERO</option>
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
            <option value="0.0">ZERO</option>
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
            <option value="0.0">ZERO</option>
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

          <p>Review</p>
          <input
            type="text"
            name="review"
            value={this.state.reviewForm.review}
            onChange={this.handleFormChange}
          />
          <button>Submit</button>
        </form>
      </div >
    )
  }


}

export default withRouter(EditReview);