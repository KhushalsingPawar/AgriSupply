import "./ProductCard.css";

function ProductCard({ item }) {
  return (
    <div className="card">
      <img src={item.image} alt={item.name} />
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>{item.type.toUpperCase()}</p>
      <p className="price">₹ {item.price}</p>
      <button>Contact</button>
    </div>
  );
}

export default ProductCard;   // ✅ MUST
