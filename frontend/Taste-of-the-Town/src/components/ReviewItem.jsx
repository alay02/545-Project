export function ReviewItem({review}) {
    return (
        <div className="review-item">
            <div className="review-header">
                <div className="user-icon"></div>
                <div className="user-name">{review.review_name}</div>
                <a className="review-restaurant" href={`/restaurant/${review.restaurant_id}`}>{review.restaurant_name}</a>
            </div>
            <div className="review-content">{review.review_comment}</div>
            <div className="review-footer">
            <div className="rating">
                    {Array.from({ length: 5 }, (_, index) => (
                        <span key={index} className={index < review.review_rating ? "filled" : ""}>★</span>
                    ))}
                </div>
            </div>
        </div>
    )
}