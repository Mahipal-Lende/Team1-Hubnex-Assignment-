import React from 'react'


interface Details{
    percent : string;
    caption : string;
    midhead:string;
    midsubhead:string;
}
const CybersecurityPercent : React.FC<Details> = ({percent,caption}) => {
  return (
    <div>
      <div className="text-center max-w-[200px]">
        <div className='mt-10'>
        <p className="text-4xl font-bold text-green-900">{percent}</p>
        <p className="text-gray-500">{caption}</p>
        </div>
      </div>
    </div>
  )
}

export default CybersecurityPercent
