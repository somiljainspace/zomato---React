import React from "react";
import "./nightlife.css";
import Filters from "../common/filters/Filters";
import NightlifeCollection from "../common/collection/NightlifeCollection";
import { BiFilter } from "react-icons/bi";
import { AiFillCrown } from "react-icons/ai";
import BannerImage from "../common/banner/BannerImage";

const NightlifeCollectionList=[
  {
    id:"1",
    title: "21 Lit Party Places",
    cover: "https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg",
    places: "21 Places",
  },
  
];

const dinningFilters=[
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
    icon: <AiFillCrown />,
    title: "Gold",
  },
  {
    id:4,
    title: "Serves Alcohol",
  },
  {
    id:5,
    title: "Outdoor Seating",
  },
  {
    id:6,
    title: "Open Now",
  }
]
const Nightlife = () => {
  return <div>
    <NightlifeCollection list={NightlifeCollectionList} />
    <div className="max-width">
    <Filters  filterList={dinningFilters}/>
    </div>
    <BannerImage />
  </div>;
};

export default Nightlife;
