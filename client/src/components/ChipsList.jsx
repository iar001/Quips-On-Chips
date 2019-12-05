import React from 'react'
import { Link, withRouter } from 'react-router-dom';

class ChipsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sorted: ""
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  render() {

    return (
      <div id="chips-div">
        
        <select
          value={this.state.sorted}
          onChange={this.handleChange}
          name="sorted">
          <option value="">Sort the Chips</option>
          <option value="taste">Sort by Taste</option>
          <option value="cost">Sort by Cost</option>
          <option value="guilt">Sort by Guilt</option>
        </select>
        {this.state.sorted === "" &&
          <div className="chips-list-div">
            {this.props.chips.map(chip => (
              <React.Fragment key={chip.id}>
                <Link to={`/chips/${chip.id}`}>
                  <img className="chip-img" src={chip.bag_pic_url} />
                  <h3>{chip.name}</h3>
                </Link>
              </React.Fragment>
            ))}
          </div>
        }
        {this.state.sorted === "taste" &&
          <div className="chips-list-div">
            {this.props.sortedFlavorChips.map(chip => (
              <React.Fragment key={chip.id}>
                <Link to={`/chips/${chip.id}`}>
                  <img className="chip-img" src={chip.bag_pic_url} />
                  <h3>{chip.name}</h3>
                </Link>
              </React.Fragment>
            ))}
          </div>
        }
        {this.state.sorted === "cost" &&
          <div className="chips-list-div">
            {this.props.sortedCostChips.map(chip => (
              <React.Fragment key={chip.id}>
                <Link to={`/chips/${chip.id}`}>
                  <img className="chip-img" src={chip.bag_pic_url} />
                  <h3>{chip.name}</h3>
                </Link>
              </React.Fragment>
            ))}
          </div>
        }
        {this.state.sorted === "guilt" &&
          <div className="chips-list-div">
            {this.props.sortedGuiltChips.map(chip => (
              <React.Fragment key={chip.id}>
                <Link to={`/chips/${chip.id}`}>
                  <img className="chip-img" src={chip.bag_pic_url} />
                  <h3>{chip.name}</h3>
                </Link>
              </React.Fragment>
            ))}
          </div>
        }
      </div>
    )
  }
}

export default withRouter(ChipsList);