import { useState } from "react";
import mobilesData from "./data/mobiles";

import Header from "./components/Header";
import SearchFilter from "./components/SearchFilter";
import MobileGrid from "./components/MobileGrid";
import CartSidebar from "./components/CartSidebar";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const addToCart = (mobile) => {
    const found = cart.find((i) => i.id === mobile.id);
    if (found) {
      setCart(
        cart.map((i) =>
          i.id === mobile.id ? { ...i, quantity: i.quantity + 1 } : i,
        ),
      );
    } else {
      setCart([...cart, { ...mobile, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, change) => {
    setCart(
      cart
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + change } : i))
        .filter((i) => i.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const total = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const filteredMobiles = mobilesData.filter((m) => {
    const searchMatch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.brand.toLowerCase().includes(searchTerm.toLowerCase());

    const categoryMatch =
      selectedCategory === "all" || m.category === selectedCategory;

    return searchMatch && categoryMatch;
  });

  return (
    <>
      <Header cart={cart} onCartToggle={() => setShowCart(true)} />

      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      <MobileGrid mobiles={filteredMobiles} addToCart={addToCart} />

      {showCart && (
        <CartSidebar
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          total={total}
          onClose={() => setShowCart(false)}
        />
      )}
    </>
  );
}

export default App;
