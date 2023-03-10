export default function Reviews(props) {    
    const { reviews: reviews } = props;
    return <div>
        <h2>Reviews</h2>
        {reviews.map((review) => (<div key={review.id}>
            <hr></hr>
            <p>Rating: {review.rating}</p>
            <p>{review.description} | <span>By {review.username}</span></p>
            </div>))}
    </div>
}