import React, { useState, useEffect } from 'react';
import { ReviewItem } from './ReviewItem'; // Adjust the path as necessary

export function ReviewContainer() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/reviews')
            .then(response => response.json())
            .then(data => {
                setReviews(data); //
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div id="reviews" className="review-container seventh">
            {reviews.map((review) => (
                <ReviewItem key={review.id} review={review} />
            ))}
        </div>
    );
}

