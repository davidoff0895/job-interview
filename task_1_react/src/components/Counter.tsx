export default function Counter() {
  const count = 0;

  const increment = (): void => {
    count++;
  };

  return (
    <div>
      <span className="count-value">{count}</span>
      <button onClick={increment}>Add</button>
    </div>
  );
}

