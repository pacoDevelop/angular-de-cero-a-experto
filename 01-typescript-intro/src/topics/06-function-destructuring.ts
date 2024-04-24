interface Product {
    description: string;
    price: number;
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

const phone: Product = {
    description: "Nokia A1",
    price: 150.0
}
const tablet: Product = {
    description: "Ipad Air",
    price: 250.0
}


// const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
const taxCalculation = (options: TaxCalculationOptions): [number, number] => {
    const { products, tax } = options;
    let total = 0;
    products.forEach(({ price }) => {

        total += price
    })
    return [total, total * tax];
}


const shoppingCart = [phone, tablet];
const tax = 0.15

const [returnTotal, returnTax] = taxCalculation({ products: shoppingCart, tax })


console.log("Total", returnTotal)
console.log("Tax", returnTax)
export { };