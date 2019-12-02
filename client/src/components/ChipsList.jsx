import React from 'react'
import { Link } from 'react-router-dom';

export default function ChipsList(props) {

  return (
    <div id="chips-div">
      <div id="chips-div-heading">
        <div id="view-chips-text1"><h2>Find Chips to Quip</h2></div>
        <div id="view-chips-text2">
          <span><h2>Find Chips to Quip</h2></span>

        </div>
      </div>
      <div className="chips-list-div">
        {props.chips.map(chip => (
          <React.Fragment key={chip.id}>
            <Link to={`/chips/${chip.id}`}>
              <img className="chip-img" src={chip.bag_pic_url} />
              <h3>{chip.name}</h3>
            </Link>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}