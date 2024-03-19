// Array to hold products
const products = [];

// Sample product names and descriptions
const productNames = ["Laptop", "Smartphone", "Tablet", "Headphones", "Smartwatch"];
const productDescriptions = [
  "A portable computer that is suitable for use on the move.",
  "A mobile phone with advanced features beyond making calls.",
  "A portable personal computer with a touchscreen interface.",
  "A pair of audio devices worn on the head.",
  "A wearable computer that resembles a wristwatch and offers features like fitness tracking and notifications."
];

// Function to generate random product name and description
function getRandomProduct() {
  const randomIndex = Math.floor(Math.random() * productNames.length);
  return {
    id: products.length, // Assigning id based on object index
    name: productNames[randomIndex],
    description: productDescriptions[randomIndex]
  };
}

// Generate 5 products and add them to the array
for (let i = 0; i < 5; i++) {
  products.push(getRandomProduct());
}

//console.log(products);

module.exports = {products}