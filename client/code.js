import axios from 'axois';


var axios = require('axios');
var FormData = require('form-data');
var fs = require('fs');
var data = new FormData();
data.append('files', fs.createReadStream('/C:/Users/Thana/Desktop/tree-name.jpg'));
data.append('title', 'สวัสดีจ้า');
data.append('owner', 'WHOAMI');

var config = {
  method: 'post',
  url: 'http://localhost:5000/upload',
  headers: { 
    ...data.getHeaders()
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

//////////////////////////////////////////////////////////////////////////////////////////////////

axios
  .post("http://localhost:7000/users", { firstName: "example", lastname: "example", age: 10 })
  .then(response => {
    console.log("response: ", response)
    // do something about response
  })
  .catch(err => {
    console.error(err)
  })


///////////////////////////////////////////////////////
"title": "asdasdasdasdasdasdasdasda",
        "owner": "asdasd",
        "filepath": "./storage\\IMG_4541_25-Jun-2020_165211_789504.JPG",
        "timestamp": "25-Jun-2020_16:52:11_789504"

///////////////////////////////

var axios = require('axios');

var config = {
  method: 'get',
  url: 'http://localhost:5000/media',
  headers: { }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});