
import React, { useState } from 'react'
export const RecentData = [
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
  {
    id:0,name:"mithun",value:100
  },
]
  

const RecentActivity = () => {

  const [seeAll,setseeAll] =  useState(false);
  return (
    <div className=' bg-gray-500 shadow-lg w-[85%] m-auto'>
      <div className='  flex justify-between '>
        <h1>Recent Activity</h1>
        <button>See all</button>
      </div>
      <div>
        {RecentData.map((data)=>(
          <div key = {data.id}>
            <p>{data.name}</p>
            <p>{data.value}</p>
          </div>

        ))}

      </div>

    </div>
  )
}

export default RecentActivity