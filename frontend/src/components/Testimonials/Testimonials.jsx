import "./Testimonials.css";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    text: "Amazing quality and fast delivery! Highly recommended.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 2,
    name: "Priya Verma",
    text: "Loved the collection ❤️ Will shop again!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 3,
    name: "Amit Patel",
    text: "Great prices and awesome styles.",
    rating: 5,
    img: "https://randomuser.me/api/portraits/men/65.jpg"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    text: "Very comfortable clothes and trendy designs!",
    rating: 4,
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>Customer Reviews</h2>

      <div className="reviews-grid">
        {reviews.map((item) => (
          <div className="review-card" key={item.id}>
            
            {/* User Image */}
            <img src={item.img} alt={item.name} />

            {/* Name */}
            <h4>{item.name}</h4>

            {/* Rating */}
            <div className="stars">
              {"⭐".repeat(item.rating)}
            </div>

            {/* Review Text */}
            <p>"{item.text}"</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;