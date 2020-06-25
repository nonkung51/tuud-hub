import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <React.Fragment>
      <div className="flex flex-row px-8 xl:px-32 justify-between items-center bg-hub-softblack fixed top-0 left-0 w-screen h-24">
        <Link className="flex flex-row text-4xl font-medium" to="/">
          <div className="text-white mr-1">Tuud</div>
          <div className="text-hub-black bg-hub-yellow px-1 rounded-md">
            hub
          </div>
        </Link>

        <Link
          className="text-xl font-medium text-hub-black bg-hub-yellow px-4 rounded-sm hover:bg-yellow-500 active:bg-yellow-700"
          to="/createpost"
        >
          POST
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Header;
