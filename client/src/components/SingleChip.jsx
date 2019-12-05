import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { oneSnack, readAllReviews } from '../services/api-helper'
import { updateReview } from './CreateReview'
import EditReview from './EditReview';


export default class SingleChip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chip: [],
      reviews: [],
      guiltAverage: null,
      costAverage: null,
      tasteAverage: null,
    }
  }

  async componentDidMount() {
    const chipId = parseInt(this.props.chipId)
    const chip = await oneSnack(chipId)
    const reviews = await readAllReviews(chipId)
    this.reviewAverage(reviews)
    this.setState({ chip, reviews })
  }

  reviewAverage(reviews) {
    if (reviews.length === 0) {
      this.setState({
        guiltAverage: " No Reviews",
        costAverage: " No Reviews",
        tasteAverage: " No Reviews"
      })
    } else {
      let guiltTotal = 0
      let costTotal = 0
      let tasteTotal = 0
      reviews.forEach(review => {
        guiltTotal += review.guilt
        costTotal += review.cost
        tasteTotal += review.taste
      })
      const guiltAverage = (guiltTotal / reviews.length).toFixed(2)
      const costAverage = (costTotal / reviews.length).toFixed(2)
      const tasteAverage = (tasteTotal / reviews.length).toFixed(2)
      this.setState({ guiltAverage, costAverage, tasteAverage })
    }
  }

  render() {
    return (
      <div>
        <div className="sc">
          <div id="sc-image-dummy">
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
              <h1>{this.state.chip.name}</h1>
            </div>
            <div id="sc-categories">
              <h3>Taste: {this.state.tasteAverage} </h3>
              <h3>Cost: {this.state.costAverage}</h3>
              <h3>Guilt: {this.state.guiltAverage} </h3>
              <h4>What the Scores Mean</h4>
              <p>Taste: Higher the score, better the flavor</p>
              <p>Cost: Higher the score, more expensive the item</p>
              <p>Guilt: Higher the score, bigger the regret</p>
              {
          this.props.currentUser
            ?
            <>
              <div id="review">
                <React.Fragment key={this.props.chipId}>
                  <Link to={`/chips/${this.props.chipId}/review`}>
                    <h3>Click here to Quip about {this.state.chip.name}</h3>
                  </Link>
                </React.Fragment>
              </div>
            </>
            :
            <p>Sign in and the ability to Quip will magically appear here</p>
        }
            </div>
          </div>
        </div>
     
        <div className="sc-review">
          <div className="user-review-title">
            <h1>Quips on This Chip</h1>
          </div>
          <div className="sc-all-reviews">
            {this.state.reviews.map(review => (
              <React.Fragment key={review.id}>
                <div id="sc-each-review">
                  <p>Taste: {review.taste}</p>
                  <p>Guilt: {review.guilt}</p>
                  <p>Cost: {review.cost}</p>
                  <p>Quip: {review.review}</p>
                  {
                    this.props.currentUser && this.props.currentUser.id === review.user_id
                      ?
                      <>
                        <Link to={`/chips/${this.props.chipId}/review/edit/${review.id}`}>
                          <p>Click Here to Edit or Delete Your Review</p>
                        </Link>
                      </>
                      :
                      <p></p>
                  }
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    )
  }
}