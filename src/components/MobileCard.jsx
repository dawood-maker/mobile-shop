import mobiles from "../data/mobiles";

/**
 * Single Mobile Card Component
 */
function MobileCard({ mobile, addToCart }) {
  return (
    <div
      className="
        bg-white rounded-2xl overflow-hidden
        shadow-sm hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Image & Category */}
      <div
        style={{ background: mobile.color || "#f9fafb" }}
        className="relative h-52 flex items-center justify-center"
      >
        <img
          src={mobile.image}
          alt={mobile.name}
          className="h-44 object-contain transition-transform duration-300 hover:scale-105"
        />

        <span
          className="
            absolute top-3 right-3
            bg-white/90 backdrop-blur
            text-gray-700 px-3 py-1
            rounded-full text-xs font-semibold capitalize shadow
          "
        >
          {mobile.category}
        </span>
      </div>

      {/* Details */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="text-lg font-bold text-gray-800 truncate">
            {mobile.name}
          </h3>
          <p className="text-sm text-gray-500">
            {mobile.brand}
          </p>
        </div>

        {/* Specs */}
        <div className="grid grid-cols-2 gap-2 py-3 border-y text-xs text-gray-600">
          {mobile.specs?.ram && <span>🧠 {mobile.specs.ram}</span>}
          {mobile.specs?.storage && <span>💾 {mobile.specs.storage}</span>}
          {mobile.specs?.camera && <span>📷 {mobile.specs.camera}</span>}
          {mobile.specs?.battery && <span>🔋 {mobile.specs.battery}</span>}
          {mobile.specs?.batteryTiming && <span>📱 {mobile.specs.batteryTiming}</span>}
        </div>

        {/* Price */}
        <h2 className="text-xl font-bold text-emerald-600">
          ₹{mobile.price.toLocaleString("en-IN")}
        </h2>

        {/* Add to Cart Button */}
        {addToCart && (
          <button
            onClick={() => addToCart(mobile)}
            className="
              w-full py-2.5 rounded-xl font-semibold text-white
              bg-gradient-to-r from-sky-500 to-indigo-500
              hover:from-sky-600 hover:to-indigo-600
              transition shadow-md hover:shadow-lg
            "
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Mobile List Component
 */
export function MobileList({ addToCart }) {
  return (
    <section className="max-w-7xl mx-auto px-4 pb-10">
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
        "
      >
        {mobiles.map((mobile) => (
          <MobileCard
            key={mobile.id}
            mobile={mobile}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default MobileCard;
