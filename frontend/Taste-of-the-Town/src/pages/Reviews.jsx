import { useEffect } from 'react';
import { ReviewContainer } from '../components/ReviewContainer';

export default function Reviews() {
    useEffect(() => {
        document.title = 'Taste of the Town - Reviews';
        }, []);
    
    return (
        <div className = "fill flex-column">
            <ReviewContainer />
        </div>
    )
}