import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import TrendingAuction from "./TrendingAuction";
import TopCollection from "./TopCollection";
const MainComponent = () => {
  return (
    <>
      <div className="w-10/12 ml-64 flex-1 h-full">
        <div className="  block  border border-b-2">
          <Header />
        </div>
        <div className="maincomponent1 border-r-2  h-full  w-9/12">
            <div className=" p-6">
          <Banner />
          <TrendingAuction/>

          <TopCollection/>
         
        </div>
        </div>
        
      </div>
    </>
  );
};

export default MainComponent;
