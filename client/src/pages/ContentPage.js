import React from 'react';

import PageFrame from '../components/PageFrame/PageFrame';
import ContentList from '../components/Content/ContentList';

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
    imageUrl:
      'https://travel.mthai.com/app/uploads/2014/07/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%97%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B8%B1%E0%B8%A8%E0%B8%99%E0%B9%8C%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B9%86-14.jpg',
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
    imageUrl:
      'https://content.shopback.com/th/wp-content/uploads/2018/03/29151347/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B9%86-5-e1522311262377.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl:
      'https://travel.mthai.com/app/uploads/2014/07/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%97%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B8%B1%E0%B8%A8%E0%B8%99%E0%B9%8C%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B9%86-14.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl:
      'https://avatars1.githubusercontent.com/u/27486521?s=460&u=b0d7e9acedc4b120ff8d8ea172f0c87694cd0bbb&v=4',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl:
      'https://travel.mthai.com/app/uploads/2014/07/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%97%E0%B8%B4%E0%B8%A7%E0%B8%97%E0%B8%B1%E0%B8%A8%E0%B8%99%E0%B9%8C%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B9%86-14.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
  {
    imageUrl: 'https://miro.medium.com/max/1200/0*00GhkqcPw9PDCXTW.png',
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
    imageUrl:
      'https://content.shopback.com/th/wp-content/uploads/2018/03/29151347/%E0%B9%80%E0%B8%AA%E0%B8%B7%E0%B9%89%E0%B8%AD%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%AB%E0%B8%8D%E0%B8%B4%E0%B8%87%E0%B8%AA%E0%B8%A7%E0%B8%A2%E0%B9%86-5-e1522311262377.jpg',
    title: 'Awesome',
    publishTime: '11/2/2563',
    publisher: 'Phukphoom',
  },
];
