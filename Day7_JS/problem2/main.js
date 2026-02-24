import { calculateTotal } from "./cart.js";

// Product array
const products = [
  { name: "Laptop", price: 55000, quantity: 2 },
  { name: "Mouse", price: 550, quantity: 4 },
  { name: "Keyboard", price: 2500, quantity: 1 }
];

// Calculate total
const totalAmount = calculateTotal(products);

// Create invoice using template literals
const invoice = `
----- Invoice -----

${products
  .map(
    item =>
      `${item.name} - ₹${item.price} x ${item.quantity} = ₹${item.price * item.quantity}`
  )
  .join("\n")}

-------------------
Total: ₹${totalAmount}
`;

console.log(invoice);