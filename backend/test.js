const http = require('http');
const request = require('request');

let tempId
let errcount = 0

//test /list
describe('Get All Certificates Endpoint', () => {
  http.get('http://localhost:5000/certs/list', res => {
    let expCode = 200
    console.log("GET http://localhost:5000/certs/list")
    console.log('Expected Status Code:', expCode);
    console.log('Received Status Code:', res.statusCode);
    if (expCode != res.statusCode) {
      errcount = errcount + 1
      console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
    }
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
});


describe('Get All Certificates Endpoint, but the endpoint is wrong', () => {
  http.get('http://localhost:5000/certs/lists', res => {
    let expCode = 404
    console.log("GET http://localhost:5000/certs/lists")
    console.log('Expected Status Code:', expCode);
    console.log('Received Status Code:', res.statusCode);
    if (expCode != res.statusCode) {
      errcount = errcount + 1
      console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
    }
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
});


//test /getall
describe('Get All Certificates owned by user under ID UID1', () => {
  http.get('http://localhost:5000/certs/getall/?user=UID1', res => {
    let expCode = 200
    console.log("GET http://localhost:5000/certs/getall/?user=UID1")
    console.log('Expected Status Code:', expCode);
    console.log('Received Status Code:', res.statusCode);
    if (expCode != res.statusCode) {
      errcount = errcount + 1
      console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
    }
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
});

describe('Get All Certificates owned by user under ID UID115 which does not exist', () => {
  http.get('http://localhost:5000/certs/getall/?user=UID115', res => {
    let expCode = 404
    console.log("GET http://localhost:5000/certs/getall/?user=UID115")
    console.log('Expected Status Code:', expCode);
    console.log('Received Status Code:', res.statusCode);
    if (expCode != res.statusCode) {
      errcount = errcount + 1
      console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
    }
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
});

//test /getone
describe('Get Certificate owned by user under ID UID1 under id 2', () => {
  http.get('http://localhost:5000/certs/getone/?user=UID1&cid=2', res => {
    let expCode = 200
    console.log("GEThttp://localhost:5000/certs/getone/?user=UID1&cid=2")
    console.log('Expected Status Code:', expCode);
    console.log('Received Status Code:', res.statusCode);
    if (expCode != res.statusCode) {
      errcount = errcount + 1
      console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
    }
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
});

describe('Get Certificate owned by user under ID UID1 under id 11511', () => {
  http.get('http://localhost:5000/certs/getone/?user=UID1&cid=11511', res => {
    let expCode = 404
    console.log("GET http://localhost:5000/certs/getone/?user=UID1&cid=11511")
    console.log('Expected Status Code:', expCode);
    console.log('Received Status Code:', res.statusCode);
    if (expCode != res.statusCode) {
      errcount = errcount + 1
      console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
    }
  }).on('error', err => {
    console.log('Error: ', err.message);
  });
});

//test /create 
describe('create certificate under ID UID2 with name "112test" ', () => {
  request.post('http://localhost:5000/certs/create/?user=UID1&cname=112test', {},
    function (err, res, body) {
      let expCode = 201
      console.log("post http://localhost:5000/certs/create/?user=UID1&cname=112test")
      console.log('Expected Status Code:', expCode);
      console.log('Received Status Code:', res.statusCode);
      if (res.statusCode == 201) {
        let substring = res.body.split(",")[1];
        let id = substring.substring(6, 14)
        tempId = id
      }
      if (expCode != res.statusCode) {
        errcount = errcount + 1
        console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
      }
      if (!err && res.statusCode == 201) {
        console.log(body);
      }

    }
  );
});

setTimeout(() => {
  describe('create certificate under ID UID2 with name "112test" that already exists ', () => {
    request.post('http://localhost:5000/certs/create/?user=UID1&cname=112test', {},
      function (err, res, body) {
        let expCode = 406
        console.log("post http://localhost:5000/certs/create/?user=UID1&cname=112test")
        console.log('Expected Status Code:', expCode);
        console.log('Received Status Code:', res.statusCode);
        if (expCode != res.statusCode) {
          errcount = errcount + 1
          console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
        }
        if (!err && res.statusCode == 201) {
          console.log(body);
        }

      }
    );
  });
}, 100);

//test /delete 
setTimeout(() => {
  describe('delete 112test certificate', () => {
    request.post(('http://localhost:5000/certs/delete/?user=UID1&cid=' + tempId), {},
      function (err, res, body) {
        let expCode = 200
        console.log("post http://localhost:5000/certs/delete/?user=UID1&cid={id}")
        console.log('Expected Status Code:', expCode);
        console.log('Received Status Code:', res.statusCode);
        if (expCode != res.statusCode) {
          errcount = errcount + 1
          console.log("!!!!!!!!!!!-ERROR-!!!!!!!!!")
        }
        if (!err && res.statusCode == 201) {
          console.log(body);
        }
        console.log("-------------------")
        console.log("TEST RUN COMPLETED")
        console.log("ERRORS ENCOUNTERED: ", errcount)

      }
    );
  });
}, 150);







