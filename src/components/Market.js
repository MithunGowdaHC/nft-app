import React from 'react';
import Header from "./Header";
import Sidebar from "./Sidebar";


const discoverCard = ()=>{
  
}

const Market = () => {
  return (
    <>
      <div className="ml-64">
        <Header />
      </div>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="ml-72 flex-1">
          <h1 className="text-4xl">Discover</h1>
          <div className="flex justify-between mt-4">
            <div className="flex ml-10 w-3/4">
              <div>
                <button className=" bg-slate-600 mr-4">Category</button>
              </div>
              <div>
                <button className=" bg-slate-600 mr-4">Collection</button>
              </div>
              <div>
                <button className=" bg-slate-600 mr-4">Price Range</button>
              </div>
            </div>
            <div className=' mr-28'>
              <button>Filter & Support</button>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Market;
