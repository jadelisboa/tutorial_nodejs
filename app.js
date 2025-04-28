const express = require("express");
const session = require("express-session");
const sqlite3 = require("sqlite3");
//toda biblioteca que for chamada, sempre terá o require.
//incorporam 
// ex: const hello = require ("hello");
//para usar, precisa-se de outra variavel

const app = express(); //essa variavel armazena as chamadas e propriedades da biblioteca EXPRESS.
const PORT = 8000;

app.use('/static', express.static(__dirname + '/static'));

app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    console.log("GET /");
    //res.send("Hello World");
    // res.send("<img src='./static/SENAI_logo.png'></img>"); //res = resposta 
    res.render("index");
});

app.get("/sobre", (req, res)=>{
    console.log("GET /sobre");
    // res.send("Você está na página sobre");
    //res.send("<img src='./static/interrogacao.jpg'></img>"); 
    res.render("sobre");
});

app.get("/dashboard", (req, res)=>{
    console.log("GET /dashboard");
    // res.send("Você está na página dashboard");
    //res.send("<img src='./static/dashboard.png'></img>"); 
    res.render("dashboard");
});

app.get("/login", (req, res)=>{
    console.log("GET /login");
    // res.send("Você está na página loginddevsumare");
    //res.send("<img src='./static/login.png'></img>"); 
    res.render("login");
});

app.get("/cadastro", (req, res)=>{
    console.log("GET /cadastro");
    // res.send("Você está na página de cadastro");
    //res.send("<img src='./static/login.png'></img>"); 
    res.render("cadastro");
});


app.listen(PORT, () => {
    console.log(`Servidor sendo executado na porta ${PORT}`);
    console.log(__dirname + "\\static");
}); 