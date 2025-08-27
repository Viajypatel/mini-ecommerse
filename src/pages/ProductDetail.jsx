import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/products";
import { useCartStore } from "../stores/cartStore";
import Loading from "../components/Loading";
import Error from "../components/Error";
import QuantitySelector from "../components/QuantitySelector";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore(state => state.addToCart);

  useEffect(() => {
    fetchProductById(id)
      .then(data => setProduct(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <div className="p-4 flex flex-col md:flex-row gap-4">
      <img src={product.image} alt={product.title} className="w-64 h-64 object-contain"/>
      <div className="flex-1">
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2">{product.description}</p>
        <p className="text-indigo-600 font-bold mt-2">${product.price}</p>
        <p className="mt-2">Rating: {product.rating.rate} ({product.rating.count} reviews)</p>
        <div className="mt-4 flex items-center gap-2">
          <QuantitySelector value={quantity} setValue={setQuantity} max={5} />
          <button onClick={() => addToCart(product, quantity)} className="bg-indigo-500 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
