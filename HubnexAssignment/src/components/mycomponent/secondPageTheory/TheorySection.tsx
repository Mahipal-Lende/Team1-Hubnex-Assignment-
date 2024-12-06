import React from 'react'

interface details{
    heading : string;
    paragraph : string;
}

const TheorySection :React.FC<details> = ({heading,paragraph}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">{heading}</h2>
      <p className="text-gray-600">{paragraph}  </p>
    </div>
  )
}

export default TheorySection
