import MobileCard from "./MobileCard";

function MobileGrid({ mobiles, addToCart }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mobiles.map((mobile) => (
          <MobileCard key={mobile.id} mobile={mobile} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default MobileGrid;