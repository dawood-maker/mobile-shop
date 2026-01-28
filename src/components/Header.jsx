function Header({ cart, onCartToggle }) {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            📱 MobileShop
          </h1>
          <p className="text-blue-100 text-sm mt-1">
            Latest Mobiles Ka Best Collection
          </p>
        </div>

        <button 
          onClick={onCartToggle}
          className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-blue-50 transition-all duration-300 flex items-center gap-2 hover:scale-105"
        >
          <span className="text-xl">🛒</span>
          <span>Cart ({cart.length})</span>
        </button>
      </div>
    </div>
  );
}

export default Header;