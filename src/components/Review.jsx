import { useParams } from "react-router-dom";
import {Container, Row, Col} from "react-bootstrap";
import ReviewForm from './ReviewForm'

import React, { useEffect, useRef } from 'react'

const Review = ({getMovieData,movie,review,setReviews}) => {
    const revText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);

    },[])
    const rev = revText.current;
    axios.post
    const updateReview = [...review,{body:rev.value}];
    rev.value = "";

    setReviews(updateReview);
  return (
   <Container>
    <Row>
        <col> <h3> Reviews</h3></col>
    </Row>
    <Row className="mt-2">
        <col>
        <img src ={movie?.poster}alt= ''/>
            </col>
            <col>
            {
                <>
                <Row>
                    <Col>
                    <ReviewForm handleSubmit={addReview} revText={revText} lableText= "Write a review?"/>
                    
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
                review?.map((r)=> {
                    return(
                        <>
                        <Row>
                            <Col>{r.body}</Col>
                        </Row>
                        </>
                    )
                })
            }
            </col>
    </Row>
   </Container>
  )
}

export default Review
