import { useNavigate } from 'react-router-dom';
import tacoria from '../images/tacoria2.jpg';
import tony from '../images/tacopizza.jpeg';
import eastLA from '../images/tacos.png';
import toast from '../images/toast.webp';

import React, { useState } from 'react';
import { PopUp } from './Popup';

export function RestaurantItem({ restaurant }) {
    const [reviewData, setReviewData] = useState({
        restaurant_id: restaurant.restaurant_id,
        review_name: 'user',
        review_rating: 0,
        review_comment: ''
    });

    const [isPopupOpen, setPopupOpen] = useState(false);

    const openPopup = () => {
        setPopupOpen(true);
      };
    
    const closePopup = () => {
        setSelectedRating(0);
        setPopupOpen(false);
    };


    const navigate = useNavigate();

    if (!restaurant) {
        return <div>Loading...</div>;
    }


    const [selectedRating, setSelectedRating] = useState(null);
    
    const handleRatingChange = (rating) => {
        setSelectedRating(rating);
        setReviewData({ ...reviewData, review_rating: rating });

    };

    
    const handleWebsiteClick = () => {
        window.location.href = restaurant.restaurant_website;
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
        window.location.reload();
    };

    const handleInputChange = (e) => {
        setReviewData({ ...reviewData, review_comment: e.target.value });
    };

    const goToRestaurant = () => {
        navigate(`/restaurant/${restaurant.restaurant_id}`);
    };

    const getImage = () => {
        switch(restaurant.restaurant_name) {
            case 'Tacoria':
                return tacoria;
            case 'Toast X Bowl':
                return toast;
            case 'East LA':
                return eastLA;
            case 'Tony Boloney\'s':
                return tony;
            default:
                return '../images/default-image.jpg';
        }
    };

    return (
        <div className="restaurant-item">
            <div className="restaurant-header">
                <h3>
                    <a href={`/restaurant/${restaurant.restaurant_id}`}>{restaurant.restaurant_name}</a>
                </h3>
                <div className="rating">
                    {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={index < restaurant.restaurant_rating ? 'filled' : ''}>★</span>
                    ))}
                </div>
            </div>
            <div className="restaurant-content">
                <img src={getImage()} alt={restaurant.restaurant_name} onClick={goToRestaurant}/>
            </div>
            <div className="restaurant-footer">
                <button type="button" onClick={handleWebsiteClick}>Website</button>
                <button className="review-button" onClick={openPopup}>Write a Review</button>
            </div>

            <PopUp isOpen={isPopupOpen} onClose={closePopup} content={
                <div className="pop-up-content">
                    <h3 id="pop-up-header">Tell us what you thought about {restaurant.restaurant_name}!</h3>
                    <textarea id="pop-up-input" placeholder="Enter..." required="" aria-label="Pop-Up Input" onChange={handleInputChange} ></textarea>
                    <ul className="center star-rating">
                        {[1, 2, 3, 4, 5].map((value) => (
                            <li key={value} data-value={value} onClick={() => handleRatingChange(value)}  className={value <= selectedRating ? 'filled' : ''}
                            >
                                &#9733;
                            </li>
                        ))}
                    </ul>
                <button id="review-post" onClick={handleReviewClick}>Post Review</button>
                </div>} />
        </div>
    );
}
