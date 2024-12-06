import React from 'react'
import HubnexLeaderCard from './HubnexLeaderCard';
import "./HubnexLeaders.css"

const HubnexLeader:React.FC = () => {
  return (
    <div>
        <div className="heading p-5">
            <h1 className='text-3xl font-bold'>Meet the leaders driving it all</h1>
            <p className='text-xl'>Spearheading s team of 250+ Xpanders comitted to deliverying exceptional tech solutions. </p>
        </div>
            <div className='containerRv ml-16'>
            <HubnexLeaderCard/>
            <HubnexLeaderCard/>
        </div>
    </div>
  )
}

export default HubnexLeader;
