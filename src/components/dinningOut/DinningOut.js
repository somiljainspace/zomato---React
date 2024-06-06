import React from "react";
import "./dinningout.css";
import Filters from "../common/filters/Filters";
import Collection from "../common/collection/Collection";
import { BiFilter } from "react-icons/bi";
import { AiFillCrown } from "react-icons/ai";
import BannerImage from "../common/banner/BannerImage";



const collectionList=[
  {
    id:"1",
    title: "10 Unique Dining Experiences",
    cover: "https://b.zmtcdn.com/data/collections/2deab8e9f06ff125e80f5cc09f11e4d7_1674569132.jpg",
    places: "25 Places",
  },
  {
    id: "2",
    title: "21 Best Insta-worthy Places",
    cover: "https://b.zmtcdn.com/data/collections/ba34f5659db282f10729ed6773f278d2_1688041325.png",
    places: "20 Places",
  },
  {
    id: "3",
    title: "21 Romantic Dinning Places",
    cover: "https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1688041059.jpg",
    places: "19 Places",
  },
  {
    id: "3",
    title: "10 Celeb Loved Places",
    cover: "https://b.zmtcdn.com/data/collections/c552488ee2d95ff698476869113c5702_1674569243.jpg",
    places: "19 Places",
  },
  {
    id: "4",
    title: "26 Serence Rooftop Places",
    cover: "https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png",
    places: "27 Places",
  },
  {
    id: "5",
    title: "16 Newly Opened Places",
    cover: "https://b.zmtcdn.com/data/collections/a247de0031551d916cbce6a8401c501f_1674569722.jpg",
    places: "19 Places",
  },
  {
    id: "6",
    title: "8 Asthetic Bars",
    cover: "https://b.zmtcdn.com/data/collections/6fa1e933aa3d2efebab16f9c384eb828_1689769689.png",
    places: "27 Places",
  },
  {
    id: "7",
    title: "12 Brilliant Brunches",
    cover: "https://b.zmtcdn.com/data/collections/8941ea1049484a5864e7a2aaf7e60f61_1688041977.png",
    places: "27 Places",
  },
  {
    id: "8",
    title: "13 Best Korean Restaurents",
    cover: "https://b.zmtcdn.com/data/collections/57f7f839a8594abf4764d47d67151f68_1687954533.png",
    places: "27 Places",
  }
]


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

const DinningOut = () => {
  return <div>
    <Collection list={collectionList} />
    <div className="max-width">
    <Filters  filterList={dinningFilters}/>
    </div>
    <BannerImage />
  </div>;
};

export default DinningOut;
