const express = require('express');
const cors = require('cors');

const routers = require('./router/index');

const main = express();

main.use(cors());
main.use(express.json());
main.use(routers);

const PORT = process.env.PORT || 3000;

main.listen(PORT);