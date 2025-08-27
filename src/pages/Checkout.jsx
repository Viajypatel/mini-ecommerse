import { useState } from "react";
import { useCartStore } from "../stores/cartStore";

export default function Checkout() {
  const { cartItems, clearCart } = useCartStore();
  const [form, setForm] = useState({ name: "", email: "", address: "" });
  const [submitted, setSubmitted] = useState(false);
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.address) return;
    clearCart();
    setSubmitted(true);
  };

  if (submitted) return <div className="p-4 text-center font-bold">Order placed successfully!</div>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">Order Summary</h1>
      <ul className="mb-4">
        {cartItems.map(item => (
          <li key={item.id} className="flex justify-between">
            {item.title} x {item.quantity} : ${(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <div className="font-bold mb-4">Total: ${total.toFixed(2)}</div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="border p-2 rounded"/>
        <input type="email" placeholder="Email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="border p-2 rounded"/>
        <textarea placeholder="Address" value={form.address} onChange={e => setForm({...form, address: e.target.value})} className="border p-2 rounded"/>
        <button type="submit" className="bg-indigo-500 text-white px-4 py-2 rounded mt-2">Place Order</button>
      </form>
    </div>
  );
}
