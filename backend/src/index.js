const express = require('express');
const cors = require('cors');
const routes = require('./routes'); //importa as rotas ./ referencia a mesma pasta do index

const app = express(); //criando a aplicação

app.use(cors()); //opção origins dentro de cors permite colocar o endereço de acesso das apps
app.use(express.json());
app.use(routes);

app.listen(3333); //acessando localhost:3333 acessa a aplicação