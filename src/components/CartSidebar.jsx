function CartSidebar({ cart, removeFromCart, updateQuantity, total, onClose }) {
  return (
    <div className="cart-sidebar">
      <button onClick={onClose}>✕</button>

      {cart.length === 0 && <p>Cart khali hai</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>₹{item.price}</p>

          <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => updateQuantity(item.id, 1)}>+</button>

          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}

      <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
      <button onClick={() => alert("Order placed 🎉")}>Checkout Karein</button>
    </div>
  );
}

export default CartSidebar;
