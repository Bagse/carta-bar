import "@fontsource-variable/onest";
import { Navbar } from "./components/Navbar";
import { CocktailSection } from "./components/CocktailSection";

function App() {
  return (
    <div className="py-10 px-3 lg:px-80">
      <div className="bg-[#141414] p-10 rounded-lg shadow-sm shadow-white">
        <Navbar />
        <h2 className="flex items-center place-content-center text-4xl font-bold pb-5">CÓCTELES</h2>
        <section className="grid grid-cols-2 gap-10">
          <CocktailSection title="PISCO" category="pisco" />
          <CocktailSection title="VODKA" category="vodka" />
          <CocktailSection title="RON" category="ron" />
          <CocktailSection title="GIN" category="gin" />
          <CocktailSection title="WHISKY" category="whisky" />
          <CocktailSection title="TEQUILA" category="tequila" />
          <CocktailSection title="VARIOS" category="varios" />
          <CocktailSection title="DEL BAR" category="casa" />
        </section>
      </div>
    </div>
  );
}

export default App;
