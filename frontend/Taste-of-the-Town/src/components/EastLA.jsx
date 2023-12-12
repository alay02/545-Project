import React, { useEffect, useState } from 'react';
import image from "../images/eastLA.png";
export function EastLA() {
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() => {
        // Fetch all restaurants from the API
        fetch('http://localhost:3000/api/restaurants')
            .then(response => response.json())
            .then(data => {
                const restaurant = data.find(r => r.restaurant_name === 'East LA');
                setRestaurant(restaurant);
            })
            .catch(error => console.error('Error:', error));
    }, []);
    

    const [reviewData, setReviewData] = useState({
        restaurant_id: 4,
        review_name: 'user',
        review_rating: 0,
        review_comment: ''
    });

    const [selectedRating, setSelectedRating] = useState(null);
    
    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
        setReviewData({ ...reviewData, review_rating: rating });

    };


    

    if (!restaurant) {
        return <div>Loading...</div>; // Display loading state while data is being fetched
    }

    const handleInputChange = (e) => {
        setReviewData({ ...reviewData, review_comment: e.target.value });
    };

    const handleReviewClick = () => {
        console.log(reviewData);

        if(reviewData.review_comment === '' || reviewData.review_rating === 0) {
            alert('Must enter review and rating!')
            return;
        }

        fetch('http://localhost:3000/api/reviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(reviewData),
        })
        .then(response => response.json())
        .then(data => console.log('Success:', data))
        .catch((error) => console.error('Error:', error));

        setSelectedRating(0);
        closePopup()
    };

    return (
        <main className="center tab">
            <section>
                <h1 className="center">{restaurant.restaurant_name}</h1>
                <img className="center equal-size-image" src={image} alt={restaurant.restaurant_name}></img>
            </section>

            <section>
                <p>{restaurant.restaurant_desc}</p>
            </section>

            <section>
                <div className="comments-section">
                    <h3>Leave a review for {restaurant.restaurant_name}!</h3>
                    <textarea id="pop-up-input" placeholder="Enter..." required="" aria-label="Pop-Up Input" onChange={handleInputChange} ></textarea>
                    <ul className="center star-rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <li key={value} data-value={value} onClick={() => handleRatingChange(value)}  className={value <= selectedRating ? 'filled' : ''}
                            >
                                &#9733;
                            </li>
                        ))}
                    </ul>
                    <button id="review-post" className="post-review-button" onClick={handleReviewClick}>Post Review</button>
                    <ul id="comments-list"></ul>
                </div>
            </section>
        </main>
    );
}
