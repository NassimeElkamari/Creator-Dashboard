import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

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
            placeholder="Add a title"
            className="w-full text-4xl font-bold outline-none  pb-2 transition-all" 
          />
        </div>

        {/* Subtitle */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Add a subtitle" 
            className="w-full text-xl outline-none  pb-2 transition-all" 
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

        {/* Video upload input */}
        <div className="mb-4">
          <label htmlFor="video-upload" className="flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-purple-400 focus:outline-none">
            <span className="flex items-center space-x-2">
              <FiUploadCloud className="w-6 h-6 text-purple-600" />
              <span className="font-medium text-gray-600">
                Drop your video here, or <span className="text-purple-600 underline">browse</span>
              </span>
            </span>
            <input id="video-upload" type="file" accept="video/*" className="hidden" />
          </label>
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
