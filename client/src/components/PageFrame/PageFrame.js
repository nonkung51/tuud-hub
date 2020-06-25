import React from 'react';

const PageFrame = (props) => {
  return (
    <React.Fragment>
      <div
        className={`${props.className} block mt-24 pt-8 px-6 sm:px-24 w-screen z-50`}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
};
export default PageFrame;
