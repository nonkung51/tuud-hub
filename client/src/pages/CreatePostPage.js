import React, { useState } from 'react';
import axios from 'axios';

import { hostUrl } from '../config.json';
import PageFrame from '../components/PageFrame/PageFrame';

const CreatePostPage = () => {
  const [postData, setPostData] = useState({
    title: '',
    publisher: '',
    image: null,
  });

  const textChangeHandle = (event) => {
    setPostData({
      ...postData,
      [event.target.name]: event.target.value,
    });
  };

  const imageChangeHandle = (event) => {
    setPostData({
      ...postData,
      image: event.target.files[0],
    });
  };

  const submitHandle = (event) => {
    console.log(postData);

    event.preventDefault();
    // var FormData = require('form-data');
    // var fs = require('fs');
    var data = new FormData();
    data.append('files', postData.image);
    data.append('title', postData.title);
    data.append(
      'owner',
      postData.publisher === '' ? 'anonymous' : postData.publisher
    );
    var config = {
      method: 'post',
      url: `${hostUrl}/upload`,
      data: data,
    };

    axios(config)
      .then((response)=>{
        console.log(JSON.stringify(response.data));
      })
      .catch((error)=>{
        console.log(error);
      });
  };

  return (
    <PageFrame className="flxed">
      <div className="flex justify-center ">
        <form
          className="flex flex-col justify-center space-y-8"
          onSubmit={submitHandle}
        >
          <div className="flex flex-col space-y-1">
            <label for="title" className="text-2xl font-medium">
              Title
            </label>
            <input
              name="title"
              value={postData.title}
              type="text"
              className="flex px-4 rounded-sm w-full text-hub-black"
              maxLength={25}
              placeholder="Your title"
              onChange={textChangeHandle}
              required
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label for="publisher" className="text-2xl font-medium">
              Publish by
            </label>
            <input
              name="publisher"
              value={postData.publisher}
              type="text"
              className="flex px-4 rounded-sm w-full text-hub-black"
              maxLength={25}
              placeholder="Your name (Not required)"
              onChange={textChangeHandle}
            />
          </div>
          <input type="file" onChange={imageChangeHandle} required />
          <button
            className="flex py-1 justify-center items-center bg-hub-yellow rounded-sm text-xl text-hub-black font-medium hover:bg-yellow-500 active:bg-yellow-800 focus:outline-none"
            type="submit"
          >
            PUBLISH
          </button>
        </form>
      </div>
    </PageFrame>
  );
};
export default CreatePostPage;
