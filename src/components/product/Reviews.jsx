export default function Reviews(props) {
    
    const { reviews: reviews } = props;

    return <div>
        <h2>Reviews</h2>
        <div>{reviews.map((review) => (<div key={review.id}>
            <hr></hr>
            <p>Rating: {review.rating}</p>
            <p>Username: {review.username}</p>
            <p>{review.description}</p>
            </div>))}</div>
    </div>
}