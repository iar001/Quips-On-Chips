import React from 'react';
import axios from 'axios';
import { Link, withRouter } from 'react-router-dom';
import { oneSnack } from '../services/api-helper'


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
        <div className="single-chip">
          <div id="single-chip-image">
            <h1>{this.state.chip.name}</h1>
            <div id="single-chip-image-div">
              <img src={this.state.chip.bag_pic_url} />
              <img src={this.state.chip.chip_pic_url} />
            </div>
          </div>

          <div id="single-chip-ratings">
            <h1>Ratings</h1>
            <h3>Taste: </h3>
            <h3>Cost:</h3>
            <h3>Guilt: </h3>
          </div>
        </div>
        <div className="single-chip-review">
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