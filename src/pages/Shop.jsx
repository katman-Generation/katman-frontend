import { useEffect, useState } from "react"
import api from "../api/axios";

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/katmangaming/shop/products/")
      .then((res) => {
        console.log("API response:", res.data);
        setProducts(res.data);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="min-h-screen bg-blue-900 text-white px-6 py-16">

      <h1 className="text-4xl font-bold text-center mb-12">
        Shop
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-blue-800 p-6 rounded-xl hover:scale-105 transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <h2 className="text-xl font-bold mb-2">
              {product.name}
            </h2>

            <p className="text-lg font-semibold mb-4">
              ${product.price}
            </p>

            <button className="w-full bg-yellow-400 text-blue-900 py-2 rounded-lg font-bold hover:bg-yellow-300 transition">
              visit our store
            </button>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Shop
