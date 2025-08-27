export default function QuantitySelector({ value, setValue, max = 5 }) {
  return (
    <select value={value} onChange={(e) => setValue(Number(e.target.value))} className="border p-1 rounded">
      {[...Array(max)].map((_, i) => (
        <option key={i+1} value={i+1}>{i+1}</option>
      ))}
    </select>
  );
}
