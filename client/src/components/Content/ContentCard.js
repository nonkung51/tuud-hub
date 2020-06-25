import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import ContentView from './ContentView';

import { hostUrl } from '../../config.json';

const ContentCard = (props) => {
  const [viewIsOpen, setViewIsOpen] = useState(false);
  const showView = () => {
    setViewIsOpen(true);
  };
  const hideView = () => {
    setViewIsOpen(false);
  };

  return (
    <React.Fragment>
      {viewIsOpen && <ContentView content={props.content} onClose={hideView} />}

      <div className="flex mx-auto flex-col bg-transparent w-80 h-56">
        <img
          className="block bg-gray-500 rounded-t-sm w-full h-40 object-cover cursor-pointer "
          src={
            hostUrl +
            props.content.filepath.split('.')[1] +
            '.' +
            props.content.filepath.split('.')[2]
          }
          alt={props.content.title}
          onClick={showView}
        />

        <div className="flex flex-col px-3 py-1 justify-between bg-white text-black rounded-b-sm w-full h-16">
          <div className="flex justify-start text-xl font-bold overflow-hidden">
            {props.content.title}
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">{props.content.timestamp}</div>
            <div className="text-md">
              By{' '}
              <Link to={`/publisher/${props.content.owner}`}>
                {props.content.owner}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ContentCard;
