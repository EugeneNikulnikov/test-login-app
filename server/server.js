const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 3001;
const mysql = require('mysql2');
const jwt = require('jsonwebtoken');

const config = {
    secret: `keepItSecret`
};

const bcrypt = require('bcrypt');
const salt = 10;

const app = express();

const db = mysql.createPool({
    connectionLimit: 5,
    host     : 'localhost',
    user     : 'root',
    password : '1234',
    database : 'login',
}).promise();


app.use(bodyParser.json());
app.use(cors());

app.post('/login', async (req, res) => {
    if(!req.body) return res.sendStatus(400);

    const {login, password} = req.body.data;
    const sqlFindUser = "SELECT * FROM users WHERE login =?";
    let [rows] = await db.query(sqlFindUser, login);

    if(rows.length){
        const match = await bcrypt.compare(password, rows[0].password);
        if(match){
            const token = jwt.sign({...rows[0]}, config.secret);
            const {password, ...userWithoutPassword } = rows[0];
             res.send({...userWithoutPassword, token, status: 201});
        }
        else{
            res.send( {status: 400, message: "INCORRECT PASSWORD" });
        }
    }
    else {
        res.send({status: 400, message: "INCORRECT USERNAME" });
    }
});

app.post('/register', async (req, res) => {
    if(!req.body) return res.sendStatus(400);

    const {name, login} = req.body.data;
    const sqlFindUser = "SELECT * FROM users WHERE login=?";
    const [rows] = await db.query(sqlFindUser, login);

    if(rows.length){
        res.send({status: 400, message: "USER HAS ALREADY EXISTS" });
    }
    else {
        let hash = bcrypt.hashSync(req.body.data.password, salt);
        let values = [name, login, hash];
        const sqlRegister = 'INSERT INTO users (username, login, password) VALUES(?)';
        await db.query(sqlRegister, [values]);

        let [rows] = await db.query(sqlFindUser, login);
        const token = jwt.sign({...rows[0]}, config.secret);
        const {password, ...userWithoutPassword } = rows[0];
        res.send({...userWithoutPassword, token, status: 201, message: "USER WAS CREATED"});
    }
    });

app.get('/main', async (req,res) => {
    const sqlFindUsers = "SELECT * FROM users";
    let [users] = await db.query(sqlFindUsers);
    res.send({status: 200, users})
});

app.listen(port);
