import React from 'react'


interface Details{
    percent : string;
    caption : string;
}
const CybersecurityPercent : React.FC<Details> = ({percent,caption}) => {
  return (
    <div>
      <div className="text-center">
        <p className="text-2xl font-bold text-green-600">{percent}</p>
        <p className="text-gray-500">{caption}</p>
      </div>
    </div>
  )
}

export default CybersecurityPercent
