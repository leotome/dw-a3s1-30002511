const express = require("express");

const app = express();

app.use(express.json());

app.use(express.urlencoded({extended : true}));

app.get("/", (req, res) => {
    res.json({mensagem : "Bem-vindos à primeira aplicação CRUD-REST."})
});

const PORTA = process.env.PORT || 8080;

app.listen(PORTA, () => {
    console.log(`O servidor está a ouvir a porta ${PORTA}`);
})