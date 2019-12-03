import React from 'react'
import { Link } from 'react-router-dom';

export default function ChipsList(props) {

  return (
    <div id="chips-div">
      <div className="cover-img-div">
        <img id="cover-img" src="https://previews.123rf.com/images/niloo138/niloo1381503/niloo138150300006/38140413-potato-chips-and-snacks-on-shelves-in-a-supermarket.jpg" />
        <a href="chips-list-div">
          <h2 id="cover-img-h2">Find Chips to Quip</h2>
          <i id="arrow-down" class="material-icons animated bounce">play_for_work</i>
        </a>

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