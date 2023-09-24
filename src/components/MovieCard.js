import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReviewForm from "./ReviewForm";
import MovieList from "./MovieList";
import Movie from "./Movies";
import Rating from "./Rating";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


function MovieCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
                <Card.Title>${movie.Title}</Card.Title>
                <Card.Text>
                    {movie.Bio}
                </Card.Text>
                <ReviewForm />
            </Card.Body>
        </Card>
    );
}

export default MovieCard; 