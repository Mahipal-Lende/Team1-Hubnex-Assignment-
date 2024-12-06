import React from 'react'

interface btnName{
    buttonName : string;
}
const Button_BlueBG : React.FC<btnName> = ({buttonName}) => {
    
  return (
    <div>
      {/* <button className="px-6 py-2 border border-gray-900 rounded-md text-gray-900 font-semibold hover:bg-gray-500">{buttonName}</button> */}
      
      
      <button className="px-6 py-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">{buttonName}</button>
    </div>
  )
}

export default Button_BlueBG;
