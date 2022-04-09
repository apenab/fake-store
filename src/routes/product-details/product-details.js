import { useParams } from "react-router-dom";

export function ProductDetails() {
  const params = useParams();

  return <h1>Product #{params.productId}</h1>;
}
