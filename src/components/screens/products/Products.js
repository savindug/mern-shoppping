import { ProductItem } from './ProductItem';

export const Products = () => {
  return (
    <div className="row" style={{ display: 'flex', flexDirection: 'row' }}>
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  );
};
