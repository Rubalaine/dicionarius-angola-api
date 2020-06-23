const { Router } = require('express');

const dictaction = require('../controllers/dictaction');
const drinks = require('../controllers/drinks');
const expressions = require('../controllers/expressions');
const general = require('../controllers/general');
const food = require('../controllers/food');
const greetings = require('../controllers/greetings');
const objects = require('../controllers/objects');
const traditional = require('../controllers/traditional');
const vocabulary = require('../controllers/vocabulary');

const routers = Router();

routers.get('/all', general.getAllGeneral);
routers.get('/all/:id', general.getOneGeneral);

routers.get('/dictaction', dictaction.getAllDictation);
routers.get('/dictaction/:id', dictaction.getOneDictation);

routers.get('/drinks', drinks.getAllDrinks);
routers.get('/drinks/:id', drinks.getOneDrinks);

routers.get('/expressions', expressions.getAllExpressions);
routers.get('/expressions/:id', expressions.getOneExpressions);

routers.get('/food', food.getAllFood);
routers.get('/food/:id', food.getOneFood);

routers.get('/greetings', greetings.getAllGreetings);
routers.get('/greetings/:id', greetings.getOneGreetings);

routers.get('/objects', objects.getAllObjects);
routers.get('/objects/:id', objects.getOneObjects);

routers.get('/traditional', traditional.getAllTraditional);
routers.get('/traditional/:id', traditional.getOneTraditional);

routers.get('/vocabulary', vocabulary.getAllVocabulary);
routers.get('/vocabulary/:id', vocabulary.getOneVocabulary);

module.exports = routers;