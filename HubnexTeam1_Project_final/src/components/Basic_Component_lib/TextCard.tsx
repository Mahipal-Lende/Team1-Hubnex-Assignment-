import React from 'react'

 interface textcard{
    serialNo : number;
    title : string;
    description : string;
 }

const TextCard : React.FC<textcard> = ({serialNo, title,description}) => {
  return (
    <div>
      <div className="border rounded-lg p-4 shadow-md text-center">
      <p className="text-blue-500 font-semibold">{serialNo}</p>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
    </div>
  )
}

export default TextCard
