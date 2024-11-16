import {useEffect, useRef} from 'react';
import api from '../../api/axiosConfig';
import {useParams} from 'react-router-dom';
import {Container, Row, Col} from 'react-bootstrap';
import ReviewForm from '../reviewForm/ReviewForm';

import React from 'react'

const Reviews = ({getMovieData, movie, reviews, setReviews, }) => {

    // reference text area control within the use form 
    const revText = useRef();
    // extract the movieID parameter value from the relevant URL
    let params = useParams();
    // movieId is the imdbId that we retrieved through the API call that is made to retrieve the array of movie data from the server
    const movieId = params.movieId;

    // when our component first loads, call a method that is passed in as a prop to our component in order to retrieve the appropriate data for the relevant movie
    useEffect(()=>{
        getMovieData(movieId);
    },[])

    // http request for adding a review to the mongoDB database (remote server)
    const addReview = async (e) => {
        e.preventDefault();
        const rev = revText.current;
        
        try{
        const response = await api.post("/api/v1/reviews", {reviewBody:rev.value, imdbId:movieId});
        // update the data from the client side array (not the database)
        const updatedReviews = [...(reviews || []), { body: rev.value}];
        // clear the text area once the user successfully submits a review
        rev.value = "";
        setReviews(updatedReviews);
        } catch(err) {
            console.log(err);
        }
    }

  return (
    <Container>
        <Row>
            <Col>
                <h3>Reviews</h3>
            </Col>
        </Row>
        <Row className="mt-2">
            <Col>
                <img src={movie?.poster} alt=""/>
            </Col>
            <Col>
                {
                    <>
                        <Row>
                            <Col>
                                <ReviewForm handleSubmit={addReview} revText={revText} labelText = "Write a review?"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <hr />
                            </Col>
                        </Row>
                    </>
                }
                {
                    reviews?.map((r,index) => {
                        return (
                            <>
                                <Row>
                                    <Col>
                                        {r.body}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        )})}
            </Col>
        </Row>
        <Row>
            <Col>
                <hr />
            </Col>
        </Row>
    </Container>
  )
}

export default Reviews