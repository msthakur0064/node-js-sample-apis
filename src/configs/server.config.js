import express from 'express';
import bodyParser from 'body-parser';

import routes from '../api/v1/routes';
// import globalHelper from '../helpers/global.helper';

const server = express();
// const {apiFailureHandler} = globalHelper;

// set body data in request
server.use(bodyParser.json({ limit: '150mb' }));
server.use(bodyParser.urlencoded({ limit: '150mb', extended: true }));

//use static file
server.use(express.static('public'));

// API normal router
server.use('/api', routes);

// invalid route handling
// server.use(function (req, res) {
//   return apiFailureHandler(req, res, 404);
// });

export default server;