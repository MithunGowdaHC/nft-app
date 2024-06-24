import React from "react";
import MessageContainer from "./components/MessageContainer";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Dashboard from "./components/Dashboard";





function App() {
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Dashboard/>

  },
  {
    path:"/message",
    element:<MessageContainer/>

  }
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















