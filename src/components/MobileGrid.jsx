import MobileCard from "./MobileCard";

function MobileGrid({ mobiles, addToCart }) {
  return (
    <div className="mobile-grid">
      {mobiles.map((mobile) => (
        <MobileCard key={mobile.id} mobile={mobile} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default MobileGrid;
