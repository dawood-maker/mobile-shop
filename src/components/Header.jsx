function Header({ cart, onCartToggle }) {
  return (
    <div className="header">
      <div>
        <h1>📱 MobileShop</h1>
        <p>Latest Mobiles Ka Best Collection</p>
      </div>

      <button onClick={onCartToggle}>
        🛒 Cart ({cart.length})
      </button>
    </div>
  );
}

export default Header;
