import { useEffect, useState } from "react";
import { fetchProducts, fetchCategories } from "../api/products";
import { useProductStore } from "../stores/productStore";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function Home() {
  const { products, setProducts, categories, setCategories } = useProductStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    Promise.all([fetchProducts(), fetchCategories()])
      .then(([prod, cat]) => {
        setProducts(prod);
        setCategories(cat);
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [setProducts, setCategories]);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "" || p.category === category)
  );

  return (
    <div className="p-4">
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border p-1 rounded flex-1"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select className="border p-1 rounded" value={category} onChange={e => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}
