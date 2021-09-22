import React from "react";
import { Modal} from "antd";

export default function Product(props) {
  const { product, onAdd } = props;
  function info() {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  return (
    <div className="col-3" style={{ width: "300px" }}>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>Rp{product.price}</div>
      <div>
        <button onClick={info}>Info</button>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
}
