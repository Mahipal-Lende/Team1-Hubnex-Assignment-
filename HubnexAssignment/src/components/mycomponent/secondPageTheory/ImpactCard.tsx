import React from 'react'
import CircularProgress from '../Basic_Components/CircularProgress';

interface card_circle{
    title : string;
    paragraph : string;
    value : number;
}
const ImpactCard : React.FC<card_circle> = ({title,paragraph,value}) => {
  return (
    <div>
      <div id="impact_card1" className="w-full flex mb-5">
      <div className='mx-4'>
        <CircularProgress percentage={value}></CircularProgress>
      </div>
      <div className='flex flex-col justify-center'>
      <h3 className="font-bold text-xl text-start">{title}</h3>
      <p className='text-start text-lg'>{paragraph}</p>
      </div>
    </div>
    </div>
  )
}

export default ImpactCard
