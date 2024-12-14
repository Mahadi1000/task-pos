export const products = [
  {
    id: 1,
    name: "New Demo Product",
    brand: "New Demo Brand",
    price: 110,
    pieces: 2,
    image: "/placeholder.svg?height=200&width=200",
  },
  
].concat(
  Array.from({ length: 11 }, (_, i) => ({
    id: i + 2,
    name: "New Demo Product",
    brand: "New Demo Brand",
    price: 110,
    pieces: 2,
    image: "/placeholder.svg?height=200&width=200",
  }))
);
