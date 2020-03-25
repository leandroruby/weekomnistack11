const express = require('express');
const OngController = require('./Controllers/OngController');
const IncidentController = require('./Controllers/IncidentController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');

/*ROUTES*/
const routes = express.Router();

/*ONGS*/
routes.post('/v1/ongs', OngController.create);
routes.get('/v1/ongs',OngController.index);

/*INCIDENTS*/
routes.post('/v1/incidents', IncidentController.create);
routes.get('/v1/incidents',IncidentController.index);
routes.delete('/v1/incidents/:id',IncidentController.delete);

/*PROFILE*/
routes.get('/v1/profile', ProfileController.index);

/*SESSION*/
routes.post('/v1/sessions', SessionController.create);

module.exports = routes;