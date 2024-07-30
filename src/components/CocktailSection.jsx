import { getCocktails } from "../services/api";
import { useState, useEffect } from "react";

export function CocktailSection({ title, category }) {
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCocktails();
        const filteredData = data.filter(
          (cocktail) => cocktail.category === category
        );
        setCocktails(filteredData);
      } catch (error) {
        setError("Failed to fetch cocktails");
      }
    };

    fetchData();
  }, [category]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-[#C7F070] text-3xl font-semibold border-b-4 border-dotted border-[#C7F070] w-28 lg:w-40">
        {title}
      </h3>
      <div className="flex flex-col gap-8 lg:gap-6">
        {cocktails.map((cocktail, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="font-semibold text-lg">{cocktail.name}</p>
              <p className="text-sm text-pretty text-[#C7F070] w-60 lg:w-72">
                {cocktail.ingredients.join(", ")}
              </p>
            </div>
            <span className="text-lg font-semibold">S/.{cocktail.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
