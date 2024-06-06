import React from "react";
import "./topbrands.css";
import Slider from "react-slick";

const topBrandsList=[
    {
      id:1,
      title: "McDonald's",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/bb30587d1148b6ab628a61945f64bf88_1625164768.png"
    },
    {
      id:2,
      title: "Domino's Pizza",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252699.png"
    },
    {
      id:3,
      title: "Burger King",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617187857.png"
    },
    {
      id:4,
      title: "Subway",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676471786.png"
    },
    {
      id:5,
      title: "Haldiram's",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/22529ff52d41a4aa3b36ac1e7e0c0db3_1605099406.png"
    },
    {
      id:6,
      title: "KFC",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433692.png"
    },
    {
      id:7,
      title: "Kaleva",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ff3d2543b65456e19d204cd385ecbb63_1605093994.png"
    },
    {
      id:8,
      title: "Bikanervala",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1356425eff0c9acd8ab6b0ad351759e4_1611253489.png"
    },
    {
      id:9,
      title: "Pizza Hut",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/d46560ce3d7b84605cab233c5abc65f3_1625165852.png"
    },
    {
      id:10,
      title: "Nirula's",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/b36cc9a495b6320aaba46fa2e3c3c267_1637748355.png"
    },
    {
      id:11,
      title: "Chaayos",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/ed9718e64b3307ae4aaee0bc81c1ea15_1625155060.png"
    },
    {
      id:12,
      title: "Theobroma",
      time: "20 min",
      cover:"https://b.zmtcdn.com/data/brand_creatives/logos/84edd5489389f21069c09f0c88ea8abb_1628179220.png"
    }
  ];

  const settings = {
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

const TopBrands = () => {
  return <div className="top-brands max-width">
    <div className="collection-title">Top brands for you</div>
    <Slider {...settings}>
      {topBrandsList.map((brand)=>{
        return <div>
          <div className="top-brands-cover">
            <img className="top-brands-image" src={brand.cover} alt={brand.title} />
            <div className="top-brands-title">{brand.title}</div>
            <div className="top-brands-time">{brand.time}</div>
          </div>
        </div>
      })}
    </Slider>
  </div>;
};

export default TopBrands;
