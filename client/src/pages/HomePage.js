import React from 'react';

import PageFrame from '../components/PageFrame/PageFrame';
import ContentList from '../components/Content/ContentList';
import Pagination from '../components/Content/Pagination';

const HomePage = () => {
  return (
    <PageFrame>
      <div className="flex flex-col justify-center">
        <ContentList contents={CONTENTS} />
      </div>
    </PageFrame>
  );
};
export default HomePage;

/*dummy data*/
const CONTENTS = [
  {
    imageUrl: 'https://travel.mthai.com/app/uploads/2014/07/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%97%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B8%B1%E0%B8%A8%E0%B8%99%E0%B9%8C%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B9%86-14.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://ds.lnwfile.com/p6mr08.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
];
