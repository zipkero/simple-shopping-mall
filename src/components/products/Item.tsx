import { Product } from "../../types";

const ProductItem = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}: Product) => (
  <li className="product-item">
    <p className="product-item-category">{category}</p>
    <p className="product-item-title">{title}</p>
    <p className="product-item-description">{description}</p>
    <img className="product-item-image" src={image} />
    <span className="product-item-price">${price}</span>
    <span className="product-item-rating">{rating.rate}</span>
  </li>
);

export default ProductItem;
