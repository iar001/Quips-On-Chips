import React from 'react';
import { withRouter } from 'react-router-dom';
import { createReview } from '../services/api-helper';

class CreateReview extends React.Component {
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
        <form onSubmit={this.newReview}>
          <p>Taste Score:</p>
          <select
            value={parseInt(this.state.reviewForm).taste}
            onChange={this.handleFormChange}
            name="taste">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <p>Guilt Score:</p>
          <select
            value={parseInt(this.state.reviewForm).guilt}
            onChange={this.handleFormChange}
            name="guilt">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <p>Cost Score:</p>
          <select
            value={parseInt(this.state.reviewForm).cost}
            onChange={this.handleFormChange}
            name="cost">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
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

export default withRouter(CreateReview);