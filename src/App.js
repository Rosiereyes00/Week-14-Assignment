
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react'
import Movie from './components/Movie'
import MovieList from './components/MovieList'
import reviewList from './components/reviewList'
import ReviewForm from './components/ReviewForm';
import './App.css';
export default function App() {
  return (
    <div className="container-fluid movie-app">
      <div className="row d-flex align-items-center mt-4 mb-4"></div>
      <div className="row">
      
    

        <MovieList />
      </div>
    </div>
  )
}