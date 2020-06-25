import React from 'react';

import ContentCard from './ContentCard';

const ContentList = (props) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {props.contents.map((item) => {
          return <ContentCard content={item} />;
        })}
      </div>
    </React.Fragment>
  );
};
export default ContentList;
