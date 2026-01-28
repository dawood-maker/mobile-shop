function Header({ cart, onCartToggle }) {
  return (
    <header className="sticky top-0 z-40 bg-gradient-to-r from-blue-600 to-purple-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo / Title */}
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-white">
            📱 MobileShop
          </h1>
          <span className="hidden sm:block text-blue-100 text-xs">
            Latest Mobiles • Best Deals
          </span>
        </div>

        {/* Cart Button */}
        <button
          onClick={onCartToggle}
          className="relative flex items-center gap-2 bg-white text-blue-600 px-4 py-2 rounded-full shadow hover:shadow-lg transition-all hover:scale-105"
        >
          <span className="text-lg">🛒</span>

          {/* Hide text on very small screens */}
          <span className="hidden sm:inline font-semibold">
            Cart
          </span>

          {/* Cart Count Badge */}
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>

      </div>
    </header>
  );
}

export default Header;
