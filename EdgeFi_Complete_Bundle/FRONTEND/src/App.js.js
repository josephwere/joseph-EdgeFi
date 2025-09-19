import React, { useState, useEffect } from "react";
import { fetchPackages } from "./api";

function App() {
  const [packages, setPackages] = useState([]);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    fetchPackages().then(data => setPackages(data));
  }, []);

  const handleBuy = (planId, amount) => {
    fetch(${process.env.NEXT_PUBLIC_API_URL}/api/payment, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, planId, amount_cents: amount * 100 })
    })
      .then(res => res.json())
      .then(data => alert(Payment triggered! Checkout ID: ${data.checkoutId}))
      .catch(err => console.error(err));
  };

  return (
    <div className="p-6 font-sans bg-gradient-to-b from-blue-600 to-blue-800 min-h-screen text-white">
      <h1 className="text-3xl mb-4">EdgeFi Wi-Fi Packages</h1>

      <input
        type="text"
        placeholder="Enter phone number"
        value={phone}
        onChange={e => setPhone(e.target.value)}
        className="p-2 rounded text-black mb-4 w-full max-w-sm"
      />

      <div className="grid md:grid-cols-3 gap-4">
        {packages.map(pkg => (
          <div key={pkg.id} className="bg-green-500 p-4 rounded-lg shadow-lg">
            <h2 className="font-bold">{pkg.name}</h2>
            <p>{pkg.description}</p>
            <p className="mt-2 font-semibold">{pkg.price} KES</p>
            <button
              className="mt-3 bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded"
              onClick={() => handleBuy(pkg.id, pkg.price)}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;