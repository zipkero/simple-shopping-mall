import { Product } from "../../types";

const ProductDetail = ({
  item: {
    category,
    title,
    description,
    image,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div className="product-detail">
      <p className="product-detail-category">{category}</p>
      <p className="product-detail-title">{title}</p>
      <p className="product-detail-description">{description}</p>
      <img className="product-detail-image" src={image} />
      <span className="product-detail-price">${price}</span>
      <span className="product-detail-rating">{rate}</span>
    </div>
  );
};

export default ProductDetail;
