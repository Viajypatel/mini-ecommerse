import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";

export default function Header() {
  const cartItems = useCartStore(state => state.cartItems);

  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Mini E-Commerce</Link>
      <Link to="/cart" className="relative">
        Cart ({cartItems.length})
      </Link>
    </header>
  );
}
