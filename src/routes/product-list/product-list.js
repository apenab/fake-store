import { Link } from "react-router-dom";

export function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <ol>
        <li>
          <Link to={`product/${1}`}>Product 1</Link>
        </li>
        <li>
          <Link to={`product/${2}`}>Product 2</Link>
        </li>
      </ol>
    </div>
  );
}
