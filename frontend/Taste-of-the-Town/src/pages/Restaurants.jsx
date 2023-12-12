import { useEffect } from 'react';
import { RestaurantContainer } from '../components/RestaurantContainer';

export default function Restaurants() {
    useEffect(() => {
        document.title = 'Taste of the Town - Restaurants';
        }, []);
    
    return (
        <div className = "fill flex-column">
            <RestaurantContainer />
        </div>
    )
}