import { useCartStore } from "../stores/cartStore";
import QuantitySelector from "../components/QuantitySelector";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useCartStore();
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cartItems.length === 0) return <div className="p-4">Your cart is empty.</div>;

  return (
    <div className="p-4">
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center gap-4 border-b py-2">
          <img src={item.image} alt={item.title} className="w-16 h-16 object-contain"/>
          <div className="flex-1">{item.title}</div>
          <div>${item.price}</div>
          <QuantitySelector value={item.quantity} setValue={(q) => updateQuantity(item.id, q)} max={10}/>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
          <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
      <div className="text-right font-bold mt-4">
        Total: ${total.toFixed(2)}
      </div>
      <div className="text-right mt-2">
        <Link to="/checkout" className="bg-indigo-500 text-white px-4 py-2 rounded">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
