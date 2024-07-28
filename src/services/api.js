const cocktails = [
  {
    name: "PISCO SOUR",
    ingredients: [
      "Tradicional pisco peruano",
      "limón",
      "jarabe de goma",
      "Sabores de su elección: (limón, maracuyá, coca, aguaymanto)",
    ],
    price: 25,
    category: "pisco",
  },
  {
    name: "CHILCANO DE PISCO",
    ingredients: [
      "Pisco",
      "limón",
      "jarabe de goma",
      "ginger ale",
      "Sabor de su elección: (limón, maracuyá, aguaymanto, chicha morada)",
    ],
    price: 20,
    category: "pisco",
  },
  {
    name: "PERÚ LIBRE",
    ingredients: ["Pisco", "limón", "coca cola"],
    price: 20,
    category: "pisco",
  },
  {
    name: "MACHU PICCHU",
    ingredients: ["Pisco", "licor de menta", "jugo de naranja", "granadina"],
    price: 25,
    category: "pisco",
  },
  {
    name: "PISCO SUNRISE",
    ingredients: ["Pisco", "jugo de naranja", "granadina"],
    price: 20,
    category: "pisco",
  },
  {
    name: "ALGARROBINA",
    ingredients: ["Pisco", "algarrobina", "leche", "crema de cacao"],
    price: 20,
    category: "pisco",
  },
  {
    name: "SHOT DE PISCO",
    ingredients: ["Pisco quebranta"],
    price: 18,
    category: "pisco",
  },
  {
    name: "VODKA SUNRISE",
    ingredients: ["Vodka", "jugo de naranja", "granadina"],
    price: 22,
    category: "vodka",
  },
  {
    name: "BLACK RUSSIAN",
    ingredients: ["Vodka", "licor de café"],
    price: 20,
    category: "vodka",
  },
  {
    name: "WHITE RUSSIAN",
    ingredients: ["Vodka", "licor de café", "leche"],
    price: 20,
    category: "vodka",
  },
  {
    name: "APPLE MARTINI",
    ingredients: ["Vodka", "licor de manzana", "hielo"],
    price: 22,
    category: "vodka",
  },
  {
    name: "GOD MOTHER",
    ingredients: ["Vodka", "amaretto"],
    price: 24,
    category: "vodka",
  },
  {
    name: "COSMOPOLITAN",
    ingredients: ["Vodka", "jugo de lima", "cointreau", "jugo de arándanos"],
    price: 22,
    category: "vodka",
  },
  {
    name: "VODKA TONIC",
    ingredients: ["Vodka", "agua tónica", "limón"],
    price: 24,
    category: "vodka",
  },
  {
    name: "CUBA LIBRE",
    ingredients: ["Ron", "coca cola"],
    price: 22,
    category: "ron",
  },
  {
    name: "MOJITO",
    ingredients: ["Ron", "azúcar", "limón", "hierba buena", "soda"],
    price: 20,
    category: "ron",
  },
  {
    name: "DAIQUIRI",
    ingredients: [
      "Ron blanco",
      "zumo de limón",
      "Sabores de elección: (durazno, fresa, limón)",
    ],
    price: 23,
    category: "ron",
  },
  {
    name: "MAI TAI",
    ingredients: [
      "Ron blanco",
      "ron negro",
      "curazao azul",
      "amaretto",
      "zumo de limón",
      "azúcar",
      "piña",
      "guinda",
      "menta",
    ],
    price: 25,
    category: "ron",
  },
  {
    name: "PIÑA COLADA",
    ingredients: ["Ron", "rodajas de piña", "crema de coco", "leche"],
    price: 25,
    category: "ron",
  },
  {
    name: "GIN TONIC",
    ingredients: ["Gin", "agua tónica", "limón"],
    price: 23,
    category: "gin",
  },
  {
    name: "DRY MARTINI",
    ingredients: ["Gin", "vermouth dry", "aceituna verde"],
    price: 25,
    category: "gin",
  },
  {
    name: "MARTINI",
    ingredients: ["Gin", "ginger ale", "limón"],
    price: 20,
    category: "gin",
  },
  {
    name: "TOM COLLINS",
    ingredients: ["Gin", "jarabe de goma", "limón", "soda"],
    price: 23,
    category: "gin",
  },
  {
    name: "MANHATTAN",
    ingredients: ["Whisky", "vermouth rojo", "gota de angostura"],
    price: 26,
    category: "whisky",
  },
  {
    name: "GOD FATHER",
    ingredients: ["Whisky escocés", "amaretto"],
    price: 25,
    category: "whisky",
  },
  {
    name: "WHISKY SOUR",
    ingredients: ["Bourbon", "limón", "jarabe de goma", "jugo de naranja"],
    price: 22,
    category: "whisky",
  },
  {
    name: "OLD FASHIONED",
    ingredients: [
      "Whisky",
      "azúcar",
      "gota de angostura",
      "soda",
      "rodaja de naranja",
    ],
    price: 27,
    category: "whisky",
  },
  {
    name: "MARGARITA",
    ingredients: ["Tequila", "triple sec", "limón"],
    price: 25,
    category: "tequila",
  },
  {
    name: "TEQUILA SUNRISE",
    ingredients: ["Tequila", "jugo de naranja", "granadina"],
    price: 24,
    category: "tequila",
  },
  {
    name: "SHOT DE TEQUILA",
    ingredients: ["Tequila"],
    price: 25,
    category: "tequila",
  },
  {
    name: "CAIPIRINHA",
    ingredients: ["Cachaza", "limón", "azúcar"],
    price: 27,
    category: "varios",
  },
  {
    name: "SEX ON THE BEACH",
    ingredients: ["Vodka", "jugo de naranja", "licor de durazno", "granadina"],
    price: 25,
    category: "varios",
  },
  {
    name: "LONG ISLAND ICE TEA",
    ingredients: ["Vodka", "tequila", "ron", "gin", "triple sec", "coca cola"],
    price: 29,
    category: "varios",
  },
  {
    name: "WHISKY EN LAS ROCAS",
    ingredients: ["Whiky", "hielo"],
    price: 30,
    category: "varios",
  },
  {
    name: "GOLOSA",
    ingredients: ["Pisco", "ron", "whiky", "tequila", "coca cola"],
    price: 30,
    category: "casa",
  },
  {
    name: "PERUANASO",
    ingredients: ["Pisco", "jarabe chicha morada", "limón", "sprite"],
    price: 27,
    category: "casa",
  },
  {
    name: "ATARDECER CARIBEÑO",
    ingredients: [
      "ron",
      "ron de coco",
      "aperol",
      "licor de café",
      "jugo de piña",
    ],
    price: 29,
    category: "casa",
  },
];

export const getCocktails = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cocktails);
    }, 500);
  });
};
