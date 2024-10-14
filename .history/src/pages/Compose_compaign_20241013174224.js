import React from 'react';

const Compose_compaign = () => {
  return (
    <div className="flex flex-col max-w-4xl mx-auto mt-10">
   

      {/* Main content area */}
      <div className="p-6 ">
        {/* Title */}
        <div className="mb-4">
          <input 
            type="text" 
            defaultValue="New Post" 
            className="w-full text-4xl font-bold outline-none focus:border-gray-300 border-b-2 border-transparent pb-2 transition-all" 
          />
        </div>

        {/* Subtitle */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Add a subtitle" 
            className="w-full text-xl outline-none focus:border-gray-300 border-b-2 border-transparent pb-2 transition-all" 
          />
        </div>

        {/* Tag or author label */}
        <div className="mb-4">
          <div className="flex items-center space-x-2">
            <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
              Hamid Nahli
            </div>
            <button className="text-purple-600">+</button>
          </div>
        </div>

        {/* Main content placeholder */}
        <div className="mb-4 mt-5">
          <textarea
            placeholder="Click here to start writing..."
            className="w-full h-64 p-4 resize-none focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Compose_compaign;
