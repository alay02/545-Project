import { useEffect } from 'react';
import { RestaurantContainer } from '../components/RestaurantContainer';

export default function Trending() {
    useEffect(() => {
        document.title = 'Taste of the Town - Trending';
        }, []);

    return (
        <div className = "fill flex-column">
            <RestaurantContainer />
        </div>
    )
}