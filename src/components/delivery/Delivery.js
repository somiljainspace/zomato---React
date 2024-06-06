import React from "react";
import "./delivery.css";
import Filters from "../common/filters/Filters";
import { BiFilter } from "react-icons/bi";
import DeliveryCollections from "./DeliveryCollections";
import TopBrands from "./topBrands/TopBrands";


const deliveryFilters=[
  {
    id:1,
    icon: <BiFilter />,
    title: "Filters",
  },
  {
    id:2,
    title: "Rating 4.0",
  },
  {
    id:3,
    title: "Safe and Hygenic",
  },
  {
    id:4,
    title: "Pure Veg",
  },
  {
    id:5,
    title: "Delivery Time",
  },
  {
    id:6,
    title: "Great Offers",
  }
]

const Delivery = () => {
  return <div>
    <div className="max-width">
    <Filters  filterList={deliveryFilters}/>
    </div>
    <DeliveryCollections />
    <TopBrands />
    {/* <ExploreSection /> */}
  </div>;
};

export default Delivery;
