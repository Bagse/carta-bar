import "@fontsource-variable/onest";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { CocktailSection } from "./components/CocktailSection";
import { useCart } from "./context/CartContext";
import OrderSummaryModal from "./components/OrderSummaryModal";

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <div className="py-10 px-3 lg:px-80">
      <div className="bg-[#141414] py-10 px-4 lg:p-10 rounded-lg shadow-sm shadow-white">
        <Navbar />
        
        <OrderSummaryModal
          showModal={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
        />
        <h2 className="flex items-center place-content-center text-4xl font-bold pb-5">
          CÓCTELES
        </h2>
        {cart.length > 0 && (
          <div className="flex place-content-center mb-8">
            <button
            onClick={() => setModalIsOpen(true)}
            className="btn bg-[#1e1e1e] text-white px-4 py-2 rounded border hover:bg-[#343a40] transition-all duration-100"
          >
            Ver Orden
          </button>
          </div>
        )}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <CocktailSection title="PISCO" category="pisco" />
          <CocktailSection title="VODKA" category="vodka" />
          <CocktailSection title="RON" category="ron" />
          <CocktailSection title="GIN" category="gin" />
          <CocktailSection title="WHISKY" category="whisky" />
          <CocktailSection title="TEQUILA" category="tequila" />
          <CocktailSection title="VARIOS" category="varios" />
          <img
            src="./img/3a.webp"
            alt=""
            className="w-[400px] h-[320px] object-cover"
          />
          <CocktailSection title="DEL BAR" category="casa" />
          <img
            src="./img/cocteles3.webp"
            alt=""
            className="w-full h-full lg:w-full lg:h-full object-cover"
          />
        </section>
      </div>
    </div>
  );
};

export default App;
