import React, { useState } from "react";
import Header from "../../components/common/header/Header";
import Footer from "../../components/common/footer/Footer";
import TabOptions from "../../components/common/tabOptions/TabOptions";
import Delivery from "../../components/delivery/Delivery";
import DinningOut from "../../components/dinningOut/DinningOut";
import Nightlife from "../../components/nightlife/Nightlife";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {/* Diff Screen  */}
      {getCorrectScreen(activeTab)}
      {/* <Footer /> */}
    </div>
  );
};

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />;
    case "Dinning Out":
      return <DinningOut />;
    case "Nightlife":
      return <Nightlife />;
    default:
      return <Delivery />;
  }
};

export default HomePage;
