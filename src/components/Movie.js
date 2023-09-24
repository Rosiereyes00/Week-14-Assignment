import React from 'react';
import {Rating} from '@mui/material'
import MovieList from './MovieList'
// import reviewList from './reviewList'
import ReviewForm from './ReviewForm';
import { useState } from "react";
import Review from './Review';


export default function Movie(props) {

  const [allReviews, setAllReviews] = useState([{
      Name: "Misha Saji",
      Review: "A beautiful adaption of the book of the same name by Dianne Wynne Jones by the Masterful animation studio Ghibli. Like all of his works, Hayao Miyazaki introduced us to yet another gorgeous world of magic with an equally engaging story.The movie has taken some creative liberties in trimming away unnecessary plotlines and few characters from the book. But despite this change the story is brilliantly woven back together which didn't stray too far from the source.",
      Rating: "4",
      Id: 0,
      movieID: 0,
  }, {
      Name: "Amanda Wang",
      Review: "A work of magic that you shouldn’t miss. It is an unforgettable, thrilling and enchanting anime movie. Easily one of the best movies I’ve ever watched and the best movie in Studio Ghibli.",
      Rating: 5,
      Id: 1,
      movieID:1,
  }, {
      Name: "Ryan Romano",
      Review: "Miraculously, Totoro doesn't talk, and yet you can still understand what the lovable furry creature is thinking with his endearing actions. And the six-legged CatBus is undeniably one of the most imaginative characters in animation history. And the human characters are also remarkable. BOTTOM LINE: A masterpiece... pure and simple.",
      Rating: 5,
      Id: 2,
      movieID: 2,
  }, {
      Name: "Shania Williams",
      Review: "Hello , Um I grew to love this movie with all my heart since my papa had a love for animation and anime movie in general I also took some of his obsessives traits towards it, this movie signify love, passion, the love for nature and the greed of people wanting more power over something they can not control. I have learnt that, being at peace with yourself and with other is the best solution in resolving matters at hand. Prince Ashitaka, taught me a valuable lesson on being  respectful, and brave even  when everyone else thought he was just being foolish to want to help the animals in the forest just to live together in peace, for me  it was more than just inspiration , and honestly I wish many more people could just sit down and watch this film out without criticizing  it meaning just because it animation",
      Rating: 5,
      Id: 3,
      movieID: 3
  }])
  console.log(props.movies.Reviews)
  function addReview(review) {
      setAllReviews([...allReviews, review])
  }

  return (
      console.log(props.movies),
      <>
          {props.movies.map(movie => (
              <div key={movie.Id}>
                  <div className="container">
                      <div className="row my-3 mx-auto">
                          <div className="col-lg">
                              <div className="card mx-auto mb-5" style={{ width: "60rem" }}>
                                  <img className="card-img-top mt-2 mx-auto" src={movie.Img} style={{ width: "auto", height: "25rem" }} />
                                  <div className="card-header mt-1">
                                      <h2 className="card-title mx-auto mt-3">{movie.Title}</h2>
                                      <h4 className="card-subtitle mx-auto">{movie.Year}</h4>
                                  </div>
                                  <div className="card-body mx-auto">
                                      <p className="card-text">{movie.Bio}</p>
                                      <div className="card-footer">
                                          <h3>Reviews</h3>
                                          {allReviews.filter(Review => (Review.movieID == movie.Id)).map(review => (
                                              <div key={review.Id}>
                                                  <p className="blockquote card-text">{review.Review}</p>
                                                  <p className="blockquote-footer card-text">User: {review.Name} Rating: {review.Rating}/5</p>
                                              </div>
                                          ))}
                                          <h3 className="mt-3">Leave your Review!</h3>
                                          <ReviewForm onSubmit={addReview} movieID={movie.Id} />
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div >

              </div>
          ))}
      </>
  )
}