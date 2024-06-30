import React from "react";
import MessageContainer from "./components/MessageContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Settings from "./components/Settings";

import Market from "./components/Market";
import Bid from "./components/Bid";
import Saved from "./components/Saved";
import Collection from "./components/Collection";
import Wallet from "./components/Wallet";
import AllCreators from "./components/AllCreators";





function App() {
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>

  },
  {
    path:"/message",
    element:<MessageContainer/>

  },
  {
    path:"/settings",
    element:<Settings/>

  },
  {
    path:"/market",
    element:<Market/>

  },
  {
    path:"/bid",
    element:<Bid/>

  },
  {
    path:"/saved",
    element:<Saved/>

  },
  {
    path:"/collection",
    element:<Collection/>

  },
  {
    path:"/wallet",
    element:<Wallet/>

  },
  {
    path:"/all-creators",
    element:<AllCreators/>

  },
])

  return (
    
   
    <div className="App">
      <>
      <RouterProvider router={appRouter} />
      </>
    </div>
   
  );
}

export default App;















