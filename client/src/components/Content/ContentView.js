import React from 'react';

const ContentView = (props) => {
  return (
    <React.Fragment>
      <div className="flex fixed left-0 top-0 justify-center bg-hub-black opacity-75 items-center w-screen h-screen"></div>
      <div className="flex fixed left-0 top-0 justify-center items-center w-screen h-screen">
        <button
          className="flex mr-4 mt-3 justify items-center text-white text-7xl font-bold absolute top-0 right-0 hover:text-gray-500 active:text-gray-800 focus:outline-none"
          onClick={props.onClose}
        >
          &#10006;
        </button>
        <div className="flex justify-center relative">
          <img
            className="flex rounded-lg h-80 xl:h-112"
            src={props.content.imageUrl}
            alt={props.content.title}
          />
        </div>
      </div>
    </React.Fragment>
  );
};
export default ContentView;
