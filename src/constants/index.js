export const MARCAS = [
  { id: 1, nombre: "Cherato" },
  { id: 2, nombre: "Mazzuri" },
  { id: 3, nombre: "Fervinha" },
];

const YEARMAX = new Date().getFullYear();

export const YEARS = Array.from(
  new Array(20),
  (valow, index) => YEARMAX - index
);

export const PLANES = [
  { id: 1, nombre: "Básico" },
  { id: 2, nombre: "Medio" },
  { id: 3, nombre: "Completo" },
];
