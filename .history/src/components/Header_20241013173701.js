import React from 'react';

const Header = ({ selectedSection, onSectionChange }) => {
  const sections = ['compose', 'audience', 'email', 'web', 'review'];

  return (
    <div className="flex items-center justify-between p-4 bg-white ">
      {/* Back Button */}
      <div className="flex items-center gap">
        <button className="p-2 rounded-full hover:bg-gray-200">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Menu */}
        <div className="ml-6 flex items-center space-x-3">
          {sections.map((section, index) => (
            <React.Fragment key={section}>
              {index > 0 && <span className="text-gray-300 text-lg">—</span>}
              <span
                className={`font-medium cursor-pointer ${
                  selectedSection === section ? 'text-black' : 'text-gray-400'
                }`}
                onClick={() => onSectionChange(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </span>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Next Button */}
        <button className="px-4 py-2 text-white bg-black rounded-md">Next</button>
        
        {/* Preview Button */}
        <button className="flex items-center px-4 py-2 border border-gray-300 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3-3m0 0l3 3m-3-3v12" />
          </svg>
          <span>Preview</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
