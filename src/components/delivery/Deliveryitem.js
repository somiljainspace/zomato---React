import React from "react";
import "./deliveryitem.css";

const Deliveryitem = ({item}) => {
  return <div>
    <div className="delivery-item-cover">
        <img className="delivery-item-image" src={item.cover} alt={item.title} />
    </div>
    <div className="delivery-item-title">{item.title}</div>
  </div>;
};

export default Deliveryitem;
