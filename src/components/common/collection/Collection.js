import React from "react";
import "./collection.css";
import Slider from "react-slick";
import { AiOutlineCaretRight } from "react-icons/ai";


const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

const Collection = ({ list }) => {
  return (
    <div className="collection-wrapper">
      <div className="max-width collection">
        <div className="collection-title">Collections</div>
        <div className="collection-subtitle-row">
          <div className="collection-subtitle-text">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Delhi NCR, based on trends
          </div>
        
        <div className="collection-location">
          <div>All collections in Delhi NCR</div>
          <AiOutlineCaretRight className="absolute-center icon-down" />
        </div>
        </div>
        <Slider {...settings}>
          {list.map((item)=>(
            <div>
                <div className="collection-cover">
                    <img className="collection-image" src={item.cover} alt={item.title} />
                    <div className="gradient-bg">
                        <div className="colection-card-title">
                            {item.title}
                        </div>
                        <div className="collection-card-subtitle">
                            <div>{item.places}</div>
                            <AiOutlineCaretRight className="absolute-center icon-down" />
                        </div>
                    </div>
                </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;
