# TA_QT

 --- test assignment ---

# Starting the app :

1) open terminal in the TA_QT folder
2) navigate to "backend"
3) run "npm install"
4) run "npm start"
5) this should run the backend locally, the console will show "server live on port 5000" and "DataBase Connected"
6) open another terminal
7) navigate to "frontend" folder
8) run "npm install"
9) run "npm start"
10) after a few seconds your browser will open the web app, if not - it will be hosted on localhost:3000


# Brief description of core files

/backend - the backend folder
- db - database forder containing QT_certificate.db
- index.js - main file containing the api code, given the size of the assignment splitting it into several files seemed unnecessary
- test.js - unit tests

/frontend 
 - /src
 - - /components - components folder, contains parts of the react app that are used in app.js
 - - - /datascreen.js - handles the data output. Received data, errors, success responses.
 - - - /form.js - assembles and sends request with parameters provided by user

 - - /index.js - core file, mostly left unchanged from init
 - - /app.js - main file, connects the components
        
readme.md - a readme file, you read it to get information about the app

# API requests and responses

By default the api is running at http://localhost:5000 so all the requests are sent there

GET "/" - default route used for testing purposes - returns "test passed" as an h1 tag

GET "/certs/list" -get full DB of all certificates made by all users, used for testing purposes. - returns an array of objects

GET /certs/getall/ + ?user={user id} - get all certificates registered by a user under specified user id (UID), requires a user id to be passed - returns an array of objects on success, returns and error message on failure

GET /certs/getone/ + ?user={user id}&cid={certificate id} - get a certificate under specified user id and certificate id, requires a user and certificate ids passed as parameters - returns an array with an object in it, returns an error message on failure

POST /certs/create/ + ?user={user id}&cname={certificate name} - create a new certificate under specified name, requires user id and certificate name passed as parameters, automatically checks for no duplicate id's or names under the same user - returns a success/error message depending on the outcome 

POST /certs/delete/ + ?user={user id}&cid={certificate id} - deletes a certificate under specified id IF the user id matches one of the certificate owner - returns a success/error message depending on the outcome 

# Testing

to run tests

1) launch the server as in "Starting the app"
2) open another terminal
3) navigate to "backend" folder
4) run "npm run test"

the script will briefly run basic endpoint tests and display if anything goes wrong
