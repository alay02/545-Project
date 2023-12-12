import { RestaurantContainer } from './RestaurantContainer';
import { ReviewContainer } from './ReviewContainer.jsx'; 


export function HomeGrid() {
    return (
        <div className="grid-container">
            <div className="grid-item">
                <h2 id='restaurants-header'>Popular Restaurants in Hoboken</h2>
                <hr></hr>
                <RestaurantContainer />
            </div>

            <div className="grid-item">
                <h2>Recent Reviews</h2>
                <hr></hr>
                <ReviewContainer />
            </div>
        </div>
    )
}