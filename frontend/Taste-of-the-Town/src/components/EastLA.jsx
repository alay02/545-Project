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

    if (!restaurant) {
        return <div>Loading...</div>; // Display loading state while data is being fetched
    }

    return (
        <main className="center">
            <section>
                <h1 className="center">{restaurant.restaurant_name}</h1>
                <img className="center equal-size-image" src={image} alt={restaurant.restaurant_name}></img>
            </section>

            <section>
                <p className="center">{restaurant.restaurant_desc}</p>
            </section>

            <section>
                <ul className="center star-rating">
                    <li data-value="1">&#9733;</li>
                    <li data-value="2">&#9733;</li>
                    <li data-value="3">&#9733;</li>
                    <li data-value="4">&#9733;</li>
                    <li data-value="5">&#9733;</li>
                </ul>
            </section>

            <section>
                <div className="comments-section">
                    <h3>Comments</h3>
                    <form id="comment-form">
                        <input type="text" id="name-input" placeholder="Your name" required aria-label="NameBox"/>
                        <textarea id="comment-input" placeholder="Add a comment..." required aria-label="TextBox"></textarea>
                        <button type="submit">Post Comment</button>
                    </form>
                    <ul id="comments-list"></ul>
                </div>
            </section>
        </main>
    );
}