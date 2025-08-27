import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center">
      <img src={product.image} alt={product.title} className="w-32 h-32 object-contain mb-2"/>
      <h2 className="font-semibold text-center">{product.title}</h2>
      <p className="text-indigo-600 font-bold mt-1">${product.price}</p>
      <Link to={`/product/${product.id}`} className="mt-2 bg-indigo-500 text-white px-4 py-1 rounded">
        View
      </Link>
    </div>
  );
}
