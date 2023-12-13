const express = require("express");
const sqlite3 = require('sqlite3');
const app = express()


// Connecting Database 
let db = new sqlite3.Database("./db/QT_certificate.db", (err) => {
    if (err) {
        console.log("Error Occurred - " + err.message);
    }
    else {
        console.log("DataBase Connected");
    }
})


const generate_key = () => {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
    var charLength = chars.length;
    var result = '';
    for (var i = 0; i < 100; i++) {
        result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

const generate_id = () => {
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var charLength = chars.length;
    var result = '';
    for (var i = 0; i < 8; i++) {
        result += chars.charAt(Math.floor(Math.random() * charLength));
    }
    return result;
}

//default call
app.get("/", (req, res) => {
    res.send("<h1>test passed</h1>")
});


//certificate calls
//get all certificates created by a specific user
app.get("/certs/getall", (req, res) => {
    let user = req.query.user
    let sql = `SELECT * FROM certificates WHERE owner='` + user + `' ORDER BY id`;
    console.log(user)
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.send("sql error")
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
        });
        res.send(rows)
    });
});

//get specific certificate 
app.get("/certs/getone/", (req, res) => {
    let user = req.query.user
    let cname = req.query.cname
    let sql = `SELECT * FROM certificates WHERE owner='` + user + `' AND name='` + cname + `' ORDER BY id`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            res.send("sql error")
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
        });
        res.send(rows)
    });
});

//create certificate 
app.post("/certs/create/", (req, res) => {
    let user = req.query.user
    let cname = req.query.cname
    let id = generate_id()
    let sql = `SELECT * FROM certificates ORDER BY id`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        const checkdoubleIds = () => {
            rows.forEach((row) => {
                if (row.id == id) {
                    id = generate_id()
                    checkdoubleIds()
                }
            });
        }
        checkdoubleIds()
    });

    let key = generate_key()
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        const checkdoubleKeys = () => {
            rows.forEach((row) => {
                if (row.key == key) {
                    key = generate_id()
                    checkdoubleKeys()
                }
            });
        }
        checkdoubleKeys()
    });
    sql = `SELECT * FROM certificates WHERE  owner='` + user + `' AND name='` + cname + `' ORDER BY id`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        if (rows.length == 0) {
            db.run(`INSERT INTO certificates VALUES(?, ?, ?, ?)`, [id, cname, user, key], function (err) {
                if (err) {
                    return console.log(err.message);
                }
                res.send("sucess")
            });
        }
        else if (rows.length > 0) {
            res.send("this certificate already exists");
        }
    });
});

//delete certificate 
app.post("/certs/delete/", (req, res) => {
    let user = req.query.user
    let cname = req.query.cname

    let sql = `SELECT * FROM certificates WHERE  owner='` + user + `' AND name='` + cname + `' ORDER BY id`;
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        if (rows.length != 0) {
            db.run(`DELETE FROM certificates WHERE name='` + cname + `'`, function (err) {
                if (err) {
                    return console.log(err.message);
                }
                res.send("sucess")
            });
        }
        else if (rows.length == 0) {
            res.send("certificate not found");
        }
    });
});


app.listen(5000, () => {
    console.log("server live on port 5000")
})