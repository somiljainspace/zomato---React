import React, { useEffect, useState } from "react";
import Fooddata from "./FoodData";
import Form from "react-bootstrap/Form";
import Cards from "./Cards";
import Set from "./Set";
import "./style.css";
import "../styles/commonClasses.css"

// use state 1
const Search = () => {
  const [fdata, setFdata] = useState(Fooddata);
  // console.log(fdata);

  //   use  state 2
  const [copydata, setCopyData] = useState([]);
//   console.log(copydata);

 const changeData = (e) =>{
    let getchangedata = e.toLowerCase();
    if (getchangedata === ""){
        setCopyData(fdata);
    }
    else{
        let storedata = copydata.filter((ele, k)=>{
           return ele.rname.toLowerCase().match(getchangedata);
        });
        setCopyData(storedata);
    }
 }

  const zomatologo =
    "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png";

  // creating hook
  useEffect(() => {
    setTimeout(() => {
      setCopyData(Fooddata);
    }, 3000);
  }, []);
  return (
    <>
      {/* <div className="container max-width">
      <div className="d-flex justify-content-between align-items-center">
        <img
          src={zomatologo}
          style={{
            width: "8rem",
            position: "relative",
            left: "2%",
            cursor: "pointer",
          }}
          alt=""
        />
      </div>

      <div className="d-flex justify-content-center align-items-center mt-3">
        <Form className="d-flex justify-content-center align-items-center w-100">
          <Form.Group className="input" controlId="formBasicEmail" style={{ flex: 1 }}>
            <Form.Control
              type="text"
              onChange={(e) => changeData(e.target.value)}
              placeholder="Search restaurants"
            />
          </Form.Group>
          <button className="btn text-light" style={{ background: "#c91616" }}>
            Submit
          </button>
        </Form>
      </div>
    </div> */}

      <section className="item_section mt-4 container max-width">
        <h2 className=" mt-5" style={{ fontWeight: 500 }}>
          Restaurants in Delhi NCR Open now
        </h2>
        <div className="row mt-2 d-flex justify-content-around align-items-center">
          {/* passing props inside card componets  */}
          { copydata && copydata.length ?  <Cards data={copydata} /> : <Set sdata={fdata}/>}
        </div>
      </section>
      
    </>
  );
};

export default Search;
