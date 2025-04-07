import React from "react";

const products = [
  {
    name: "Wireless Charging Pad",
    price: "$29.99",
    image: "https://via.placeholder.com/300x200?text=Charging+Pad",
  },
  {
    name: "Portable Mini Projector",
    price: "$79.99",
    image: "https://via.placeholder.com/300x200?text=Mini+Projector",
  },
  {
    name: "Smart LED Light Strip",
    price: "$19.99",
    image: "https://via.placeholder.com/300x200?text=LED+Strip",
  },
];

export default function App() {
  return (
    <main className="min-h-screen bg-white text-gray-800 p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">DriftCartHub</h1>
        <p className="text-lg mt-2">Techy. Trendy. Totally Drift-Worthy.</p>
        <button className="mt-4 bg-black text-white px-4 py-2 rounded-full">Shop Now</button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        <div className="text-center">
          <h2 className="text-xl font-semibold">Curated Products</h2>
          <p className="mt-2 text-sm">We source only the best gadgets and gear for modern life.</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Fast & Free Shipping</h2>
          <p className="mt-2 text-sm">Get your products delivered quickly, no extra cost.</p>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-semibold">Customer Approved</h2>
          <p className="mt-2 text-sm">Thousands of happy shoppers and five-star reviews.</p>
        </div>
      </section>

      <section className="py-10">
        <h2 className="text-2xl font-bold text-center mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="border p-4 rounded-xl shadow-sm hover:shadow-lg transition-shadow text-center">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600 mt-1">{product.price}</p>
              <button className="mt-3 w-full bg-black text-white py-2 rounded-full">Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6 border-t mt-10">
        &copy; 2025 DriftCartHub. All rights reserved.
      </footer>
    </main>
  );
}
