import React from "react";
import Card from "react-bootstrap/Card";

const Cards = ({ data }) => {
  return (
    <>
      {data.map((element, k) => {
        return (
          <>
            <Card className="card">
              <Card.Img variant="top" className="image" src={element.imgdata} />
              <div className="card_body">
                <div className="upper_data">
                  <h4>{element.rname}</h4>
                  <span>{element.rating} &nbsp; ★</span>
                </div>
                <div className="lower_data">
                  <h5>{element.address}</h5>
                  <span>{element.price}</span>
                </div>
                <hr />
                <div className="last_data">
                    <img src={element.arrimg} className="trending-icon" alt="" />
                    <p>{element.somedata}</p>
                    <img src={element.delimg} className="safety-icon" alt="" />
                </div>
              </div>
            </Card>
          </>
        );
      })}
    </>
  );
};

export default Cards;
