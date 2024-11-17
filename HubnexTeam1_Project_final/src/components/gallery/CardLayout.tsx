import React from "react";

const CardLayout:React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center bg-slate-300 gap-4 p-4 h-full">
      {/* Card 1 */}
      <div className="w-1/3 h-1/3 bg-white shadow-md rounded-md overflow-hidden">
        <div
          className="w-full h-2/3 object-cover bg-red-500">
          <div className="p-4">
          <p className="text-gray-700 text-sm">
            This is the description for Card 1.
          </p>
        </div>
        </div>
        
      </div>

      {/* Card 2 */}
      <div className="w-1/3 h-full bg-white shadow-md rounded-md overflow-hidden">
        <img
          src="https://via.placeholder.com/150"
          alt="Card Image"
          className="w-full h-2/3 object-cover"
        />
        <div className="p-4">
          <p className="text-gray-700 text-sm">
            This is the description for Card 2.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="w-1/3 h-full bg-white shadow-md rounded-md overflow-hidden">
        <img
          src="https://via.placeholder.com/150"
          alt="Card Image"
          className="w-full h-2/3 object-cover"
        />
        <div className="p-4">
          <p className="text-gray-700 text-sm">
            This is the description for Card 3.
          </p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="w-1/3 h-full bg-white shadow-md rounded-md overflow-hidden">
        <img
          src="https://via.placeholder.com/150"
          alt="Card Image"
          className="w-full h-2/3 object-cover"
        />
        <div className="p-4">
          <p className="text-gray-700 text-sm">
            This is the description for Card 4.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
