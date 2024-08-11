const express = require('express');
const httpProxy = require('express-http-proxy');

const app = express();

app.use('/auth', httpProxy('http://localhost:5000'));
app.use('/todo', httpProxy('http://localhost:5001'));

app.listen(3000, () => console.log('API Gateway started on port 3000'));
