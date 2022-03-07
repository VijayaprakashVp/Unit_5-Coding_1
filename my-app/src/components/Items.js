export function Items(props) {
  return (
    <div>
      <h1 className="items">{props.name}</h1>
      <p>{props.name}</p>
      <button onClick={() => handleChange(1)}>add</button>
      <button>sub</button>
      <p>{props.count}</p>
    </div>
  );
}
