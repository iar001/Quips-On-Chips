import React from 'react';
import { withRouter } from 'react-router-dom';

function CreateReview(props) {


  return (
    <div className="create-form" >
      <h2>Create a new comment</h2>
      <form onSubmit={props.newReview}>
        <p>Taste Score:</p>
        <input
          type="text"
          name="taste"
          value={props.reviewForm.taste}
          onChange={props.handleFormChange} />
        <p>Guilt Score:</p>
        <input
          type="text"
          name="guilt"
          value={props.reviewForm.guilt}
          onChange={props.handleFormChange} />
        <p>Cost Score:</p>
        <input
          type="text"
          name="cost"
          value={props.reviewForm.cost}
          onChange={props.handleFormChange}
        />
        <p>Review</p>
        <input
          type="text"
          name="review"
          value={props.reviewForm.cost}
          onChange={props.handleFormChange}
        />
        <button>Submit</button>
      </form>
    </div >
  )
}

export default withRouter(CreateReview);