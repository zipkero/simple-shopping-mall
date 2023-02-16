import { useQuery } from "react-query";
import ProductItem from "../../components/products/Item";
import { fetcher, QueryKeys } from "../../queryClient";
import { Product } from "../../types";

const ProductList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
