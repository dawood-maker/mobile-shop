import MobileCard from "./MobileCard";

function MobileGrid({ mobiles, addToCart }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      {/* Grid */}
      <div
        className="
          grid gap-5
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          xl:grid-cols-4
        "
      >
        {mobiles.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
}

export default MobileGrid;
