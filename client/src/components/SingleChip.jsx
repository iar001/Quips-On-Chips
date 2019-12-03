import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { oneSnack, readAllReviews } from '../services/api-helper'
import { CreateReview } from './CreateReview'


export default class SingleChip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chip: [],
      reviews: []
    }
  }
  async componentDidMount() {
    const chipId = parseInt(this.props.chipId)
    const chip = await oneSnack(chipId)
    const reviews = await readAllReviews(chipId)
    this.setState({
      chip,
      reviews
    })
  }

  render() {
    return (
      <div>
        <div className="sc">
          <div id="sc-image-dummy">
            <h1>{this.state.chip.name}</h1>
            <div id="sc-image">
              <div id="sc-image-inner">
                <div id="sc-image-front">
                  <img src={this.state.chip.bag_pic_url} />
                </div>
                <div id="sc-image-back">
                  <img src={this.state.chip.chip_pic_url} />
                </div>
              </div>
            </div>
          </div>

          <div id="sc-ratings">
            <div>
              <h1>Ratings</h1>
            </div>
            <div id="sc-categories">
              <h3>Taste: </h3>
              <h3>Cost:</h3>
              <h3>Guilt: </h3>
            </div>
          </div>
        </div>
        {
          this.props.currentUser
            ?
            <>
              <div id="review">
                <React.Fragment key={this.props.chipId}>
                  <Link to={`/chips/${this.props.chipId}/review`}>
                    <h3>Click Here to Write a Review Of {this.state.chip.name}</h3>
                  </Link>
                </React.Fragment>
              </div>
            </>
            :
            <p>Nothin</p>
        }

        <div className="sc-review">
          {this.state.reviews.map(review => (
            <React.Fragment key={review.id}>
              <div>
                <h1>Review</h1>
                <p>Taste: {review.taste}</p>
                <p>Guilt: {review.guilt}</p>
                <p>Cost: {review.cost}</p>
                <p>Review: {review.review}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    )
  }
}