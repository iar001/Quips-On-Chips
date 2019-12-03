import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { oneSnack } from '../services/api-helper'
import { CreateReview } from './CreateReview'


export default class SingleChip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chip: []
    }
  }
  async componentDidMount() {
    const chipId = parseInt(this.props.chipId)
    const chip = await oneSnack(chipId)
    console.log(chip)
    this.setState({
      chip
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
        <React.Fragment key={this.props.chipId}>
          <Link to={`/chips/${this.props.chipId}/review`}>
            {/* <img className="chip-img" src={chip.bag_pic_url} /> */}
            <h3>{this.state.chip.name}</h3>
          </Link>
        </React.Fragment>


        <div className="sc-review">
          <div>
            <h2>Review One</h2>
          </div>
          <div>
            <h2>Review Two</h2>
          </div>
          <div>
            <h2>Review Three</h2>
          </div>
          <div>
            <h2>Review Four</h2>
          </div>
          <div>
            <h2>Review Five</h2>
          </div>
        </div>
      </div>
    )
  }
}