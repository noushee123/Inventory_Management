import React from 'react';


const App = () => {
  return (
    <div className="flex flex-wrap justify-center items-center h-screen bg-gray-100 p-4">
      <div className="flex flex-col items-center space-y-4">
        <div className="flex space-x-4">
          <div className="flex items-center justify-center bg-red-500 text-white font-bold h-24 w-24 md:h-32 md:w-32">
            01
          </div>
          <div className="bg-yellow-500 p-4 w-48 md:w-64">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-yellow-500 flex items-center justify-center text-white font-bold h-24 w-24 md:h-32 md:w-32">
            02
          </div>
          <div className="bg-blue-500 p-4 w-48 md:w-64">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-blue-500 flex items-center justify-center text-white font-bold h-24 w-24 md:h-32 md:w-32">
            03
          </div>
          <div className="bg-green-500 p-4 w-48 md:w-64">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis.
            </p>
          </div>
        </div>
        <div className="flex space-x-4">
          <div className="bg-green-500 flex items-center justify-center text-white font-bold h-24 w-24 md:h-32 md:w-32">
            04
          </div>
          <div className="bg-blue-900 p-4 w-48 md:w-64">
            <p className="text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dignissim pretium consectetur. Curabitur tempor posuere massa in varius. Pellentesque viverra nibh eu vehicula mattis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
