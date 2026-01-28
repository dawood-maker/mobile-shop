function MobileCard({ mobile, addToCart }) {
  return (
    <div className="mobile-card">
      <div style={{ background: mobile.color }}>
        <div style={{ fontSize: "80px" }}>{mobile.image}</div>
        <span>{mobile.category}</span>
      </div>

      <h3>{mobile.name}</h3>
      <p>{mobile.brand}</p>

      <p>🧠 {mobile.specs.ram}</p>
      <p>💾 {mobile.specs.storage}</p>
      <p>📷 {mobile.specs.camera}</p>
      <p>🔋 {mobile.specs.battery}</p>

      <h2>₹{mobile.price.toLocaleString("en-IN")}</h2>

      <button onClick={() => addToCart(mobile)}>Add to Cart</button>
    </div>
  );
}

export default MobileCard;
