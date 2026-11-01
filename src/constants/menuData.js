export const MENU_SECTIONS = [
  {
    id: "frappes",
    title: "Frappes",
    slogan: "Un antojo siempre es buena idea",
    items: [
      { name: "Frappuccino", price: 9.00 },
      { name: "Moca", price: 10.00 },
      { name: "Nutella", price: 11.00, tag: "Favorito" },
      { name: "Fresa", price: 10.00 },
      { name: "Oreo", price: 10.00, tag: "Popular" },
    ],
  },
  {
    id: "waffles",
    title: "Waffles y postres",
    slogan: "El toque dulce de tu día",
    items: [
      { name: "Waffle Sencillo", price: 9.00 },
      { name: "Waffle Especial", price: 12.00 },
      { name: "Ensalada de Fruta Especial", price: 9.00 },
    ],
  },
  {
    id: "jugos",
    title: "Jugos naturales",
    slogan: "Fruta en todo sabor",
    items: [
      { name: "Jugo de Fresa con Leche", price: 8.00 },
      { name: "Jugo de Mango con Leche", price: 7.00 },
      { name: "Jugo de Piña", price: 7.00 },
      { name: "Jugo de Plátano", price: 7.00 },
      { name: "Jugo de Papaya", price: 7.00 },
    ],
  },
  {
    id: "calientes",
    title: "Bebidas calientes",
    slogan: "Calientito y siempre rico",
    items: [
      { name: "Café", price: 4.00 },
      { name: "Chocolatada", price: 8.00 },
      { name: "Filtrante de Manzanilla", price: 2.50 },
      { name: "Filtrante de Anís", price: 2.50 },
      { name: "Filtrante de Hierba Luisa", price: 2.50 },
    ],
  },
  {
    id: "litro",
    title: "Bebidas de 1 litro",
    slogan: "Refresca tu día",
    items: [
      { name: "Limonada Frozen (1 L)", price: 9.00 },
      { name: "Chicha Morada (1 L)", price: 9.00 },
      { name: "Maracuyá (1 L)", price: 9.00 },
    ],
  },
  {
    id: "helados",
    title: "Helados y barquimiel",
    slogan: "Endulza tus partidas",
    items: [
      { name: "Barquimiel", price: 5.00, detail: "Toppings: grajeas y fudge" },
      { name: "Helado en Vaso Normal", price: 6.00, detail: "Toppings: grajeas, chinchin y fudge" },
      { name: "Helado en Vaso Grande", price: 9.00, detail: "Toppings: grajeas, chinchin y fudge" },
    ],
  },
  {
    id: "snacks",
    title: "Snacks y picadas",
    slogan: "Aquí cada bocado es una buena jugada",
    items: [
      { name: "Papas Fritas Saladas", price: 5.00 },
      { name: "Camote Frito", price: 5.00 },
      { name: "Plátano Frito", price: 5.00 },
      { name: "Chachita (Palomitas)", price: 5.00 },
      { name: "Doritos Snacks", price: 5.00 },
      { name: "Elige tu combinación favorita", price: 5.00, detail: "Papas + camote / Papas + plátano / Camote + plátano o la que prefieras", tag: "Personalizado" },
    ],
  },
  {
    id: "tragos",
    title: "Combos, cervezas y tragos",
    slogan: "¡Espacio, música y juegos de mesa totalmente gratis!",
    items: [
      { name: "Combo Ron Cabo Blanco + Coca-Cola", price: 69.00, tag: "Para grupos" },
      { name: "Combo Pisco Santiago Queirolo + Sprite", price: 79.00, tag: "Para grupos" },
      { name: "Cerveza Pilsen Callao (Helada)", price: 8.00 },
      { name: "Mike's Hard Lemonade (Maracuyá / Arándano)", price: 8.00 },
    ],
  },
];