import { Rating } from '@mui/material'
import React from 'react'
import { useState } from 'react'

export default function Reviewlist(props) {
  let nextID = 7
  const [nameValue, setNameValue] = useState('')
  const [reviewValue, setReviewValue] = useState('')
  const [ratingValue, setRatingValue] = useState('')
  console.log(props)
  const handleSubmit = (event) => {
    event.preventDefault()
    props.onSubmit({
      Name: nameValue,
      Review: reviewValue,
      Rating: ratingValue,
      Id: nextID++,
      movieID: props.movieID,
    })
  }
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="Name" class="form-label">
            User Name:
          </label>
          <input
            type="text"
            class="form-control"
            id="Name"
            value={nameValue}
            placeholder="Username"
            onChange={(event) => setNameValue(event.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="Review" class="form-label">
            Your Review
          </label>
          <textarea
            type="text"
            class="form-control"
            id="Review"
            value={reviewValue}
            rows="3"
            placeholder="Review"
            onChange={(event) => setReviewValue(event.target.value)}
          />
        </div>
        <Rating 
          name="Rating"
          onChange={(event) => setRatingValue(event.target.value)}
        />
        <br />
        <button className="btn btn-success my-2 mx-auto" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  )
}