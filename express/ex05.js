const express = require('express');
const router = require('./ex05_routes');
const server = express();

server.use('/api', router)


server.listen(3000, () => console.log('Executando...'));