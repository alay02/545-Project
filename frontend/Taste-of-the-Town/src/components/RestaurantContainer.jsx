import React, { useState, useEffect } from 'react';
import { RestaurantItem } from './RestaurantItem'; // Adjust the path as necessary

export function RestaurantContainer() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/restaurants')
            .then(response => response.json())
            .then(data => {
                setRestaurants(data); // Assuming data is an array of restaurant objects;
            })
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div id='restaurants' className="restaurant-container sixth">
            {restaurants.map((restaurant) => (
                <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))}
        </div>
    );
}
