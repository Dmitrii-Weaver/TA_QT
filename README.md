# TA_QT

 --- test assignment for QT company ---

# starting the app :

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


# brief description of core files

/backend - the backend folder
    /db - database folder, contains the QT_certificate.db file
    index.js - main file, contains all the api code (the task seemed rather basic so splitting it into several files seemed unnecessary)
    test.js - unit tests
/frontend
    /src
        /components - components folder, contains parts of the react app that are used in app.js
            datascreen.js - handles the data output. Received data, errors, success responses.
            form.js - assembles and sends request with parameters provided by user
        index.js - core file, mostly left unchanged from init
        app.js - main file, connects the components
        
readme.md - a readme file, you read it to get information about the app
