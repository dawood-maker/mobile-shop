import mobiles from "../data/mobiles";

/**
 * Single Mobile Card Component
 * - Optional chaining use kiya gaya specs ke liye
 * - Add to Cart button included
 */
function MobileCard({ mobile, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      
      {/* Image & Category */}
      <div 
        style={{ background: mobile.color || "#f5f5f5" }}
        className="p-4 text-center relative h-64 flex items-center justify-center"
      >
        <img 
          src={mobile.image} 
          alt={mobile.name}
          className="h-48 w-auto object-contain"
        />
        <span className="absolute top-4 right-4 bg-white text-gray-800 px-3 py-1 rounded-full text-xs font-semibold uppercase">
          {mobile.category}
        </span>
      </div>

      {/* Details */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-gray-800">{mobile.name}</h3>
        <p className="text-gray-500 font-medium">{mobile.brand}</p>

        {/* Specs Grid with optional chaining */}
        <div className="grid grid-cols-2 gap-2 py-4 border-t border-b border-gray-200">
          {mobile.specs?.ram && <p className="text-sm text-gray-600">🧠 {mobile.specs.ram}</p>}
          {mobile.specs?.storage && <p className="text-sm text-gray-600">💾 {mobile.specs.storage}</p>}
          {mobile.specs?.camera && <p className="text-sm text-gray-600">📷 {mobile.specs.camera}</p>}
          {mobile.specs?.battery && <p className="text-sm text-gray-600">🔋 {mobile.specs.battery}</p>}
          {mobile.specs?.batteryTimeing && <p className="text-sm text-gray-600">🔋 {mobile.specs.batteryTimeing}</p>}
        </div>

        <h2 className="text-2xl font-bold text-green-600">
          ₹{mobile.price.toLocaleString("en-IN")}
        </h2>

        {addToCart && (
          <button 
            onClick={() => addToCart(mobile)}
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Wrapper Component
 * - Maps over all mobiles and renders MobileCard
 */
export function MobileList({ addToCart }) {
  return (
    <div className="mobile-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {mobiles.map((mobile) => (
        <MobileCard key={mobile.id} mobile={mobile} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default MobileCard;
