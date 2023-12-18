interface props {
  items: string[];
}
function List({ items }: props) {
  return (
    <div>
      <h1>Cities</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default List;
