import { useParams } from "react-router-dom";
function ProductDetail() {
  const params = useParams(); // return a params object -> {productId: value}( dynamic route )

  return (
    <section>
      <h1>Product detail</h1>
      <p>{params.productId}</p>
    </section>
  );
}

export default ProductDetail;
