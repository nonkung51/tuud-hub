import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ContentView from './ContentView';


const ContentCard = (props) => {
  const [viewIsOpen, setViewIsOpen] = useState(false);
  const showView = () =>{
    setViewIsOpen(true);
  }
  const hideView = () =>{
    setViewIsOpen(false);
  }

  return (
    <React.Fragment>
      {viewIsOpen && <ContentView content={props.content} onClose={hideView}/>}

      <div className="flex mx-auto flex-col bg-transparent w-80 h-56">
        <img
          className="block bg-gray-500 rounded-t-sm w-full h-40 object-cover cursor-pointer "
          src={props.content.imageUrl}
          alt={props.content.title}
          onClick={showView}
        />

        <div className="flex flex-col px-3 py-1 justify-between bg-white text-black rounded-b-sm w-full h-16">
          <div className="flex justify-start text-xl font-bold overflow-hidden">
            {props.content.title}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">{props.content.publishTime}</div>
            <div className="text-md">
              By{' '}
              <Link to={`/publisher/${props.content.publisher}`}>
                {props.content.publisher}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ContentCard;
