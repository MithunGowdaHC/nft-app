import React from 'react'

import Banner from './Banner'
import Header from './Header'
import TrendingAuction from './TrendingAuction'
import TopCollection from './TopCollection'
const MainComponent = () => {
  return (
    <>
    <div className=' ml-64'>
        <Header/>
    </div>

     <div className=''>
    <div className=' w-[62%] ml-64 border-r-2'>
        <Banner/>
        <TrendingAuction/>
        <TopCollection/>
    </div>
    </div>
    
    </>
  )
}

export default MainComponent