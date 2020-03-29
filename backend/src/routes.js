const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();


routes.post('/sessions',SessionController.create);

//GET de ONGs
routes.get('/ongs',OngController.index);
//POST de ONGs
routes.post('/ongs',OngController.create);
//GET de incidentes
routes.get('/incidents',IncidentController.index);
//POST de incidentes
routes.post('/incidents',IncidentController.create);
//DELETE de incidentes
routes.delete('/incidents/:id',IncidentController.delete);

//GET de incidentes
routes.get('/profile',ProfileController.index);

module.exports=routes;