import { Product, taxCalculation, tax } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia",
        price: 100
    },
    {
        description: "Ipad",
        price: 200
    }
];

const [returnTotal, returnTax] = taxCalculation({ products: shoppingCart, tax })

console.log(returnTotal)
console.log(returnTax)
