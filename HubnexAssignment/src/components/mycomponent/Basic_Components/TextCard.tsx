import React from 'react'

 interface textcard{
    serialNo : number;
    title : string;
    description : string;
 }

const TextCard : React.FC<textcard> = ({serialNo, title,description}) => {
  return (
    <div className='h-200px'>
      <div className="border rounded-lg p-4 shadow-md text-center hover:bg-blue-500 hover:text-white">
      <div className='h-6 w-5 mb-1 bg-blue-600'>
      <p className="text-white font-semibold">{serialNo}</p>
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-60">{description}</p>
    </div>
    </div>
  )
}

export default TextCard
