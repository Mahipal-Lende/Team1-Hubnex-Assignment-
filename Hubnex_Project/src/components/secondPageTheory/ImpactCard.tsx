import React from 'react'
import { AnimatedCircularProgressBar } from '../magicui_comp/AnimatedCircularProgressBar'

interface card_circle{
    title : string;
    paragraph : string;
    value : number;
}
const ImpactCard : React.FC<card_circle> = ({title,paragraph,value}) => {
  return (
    <div>
      <div id="impact_card1" className="w-full flex gap-10 mb-10">
      <div>
      <AnimatedCircularProgressBar max={100} value={value} min={0} gaugePrimaryColor={"blue"} gaugeSecondaryColor={"white"}/>
      </div>
      <div className='flex flex-col justify-center'>
      <h3 className="font-bold text-xl text-start">{title}</h3>
      <p className='text-start'>{paragraph}</p>
      </div>
    </div>
    </div>
  )
}

export default ImpactCard
