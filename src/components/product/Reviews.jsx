import showStars from "../../utilities/ReviewStars";
import { ReviewsContainer } from "./Reviews.style";

export default function Reviews(props) {    
    const { reviews: reviewsArray } = props;
    return <ReviewsContainer>
        <h2>Reviews</h2>
        {reviewsArray.length === 0 && <div>This product has no reviews yet.</div>}
        {reviewsArray.map((review) => (<div key={review.id}>
            <hr></hr>
            <p><strong>By {review.username}</strong> {showStars(review.rating, 16)}</p>
            <p>{review.description}</p>
            </div>))}
    </ReviewsContainer>
}