function CartSidebar({ cart, removeFromCart, updateQuantity, total, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
      />

      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full sm:w-[380px] bg-white z-50 flex flex-col
        animate-slideIn shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-bold">🛒 Your Cart</h2>
          <button
            onClick={onClose}
            className="text-2xl hover:bg-white/20 w-9 h-9 rounded-full transition"
          >
            ✕
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cart.length === 0 && (
            <div className="text-center py-24 text-gray-400">
              <p className="text-lg">Cart khali hai 😔</p>
            </div>
          )}

          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-xl p-4 space-y-3 shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-between">
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {item.name}
                  </h4>
                  <p className="text-green-600 font-bold">
                    ₹{item.price.toLocaleString("en-IN")}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 bg-white rounded-lg px-3 py-2 shadow-inner">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="w-7 h-7 bg-gray-200 hover:bg-gray-300 rounded-full font-bold"
                  >
                    −
                  </button>
                  <span className="font-bold w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="w-7 h-7 bg-blue-600 text-white hover:bg-blue-700 rounded-full font-bold"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm font-semibold hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="sticky bottom-0 bg-white border-t p-4 space-y-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-gray-700">Total</span>
              <span className="text-xl font-bold text-green-600">
                ₹{total.toLocaleString("en-IN")}
              </span>
            </div>

            <button
              onClick={() => alert("Order placed 🎉")}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-bold text-lg shadow-lg transition"
            >
              Checkout 🎉
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartSidebar;
