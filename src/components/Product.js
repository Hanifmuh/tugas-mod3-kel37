import React from 'react';

export default function Product(props) {
  const { product, onAdd } = props;
  return (
    <div className="col-3" style={{width:'300px'}}>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>Rp{product.price}</div>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}