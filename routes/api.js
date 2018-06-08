// Configuration MongoDB
let mongodb = require('mongodb');
let ObjectId = mongodb.ObjectID;
let MongoClient = mongodb.MongoClient;
let mongodbUrl = 'mongodb://localhost:27017/tapgame';

// Configuration du module
let express = require('express');
let router = express.Router();

// Configuration de la route principale => http://localhost:8080/api/
router.get('/', (req, res, next) => {
  res.json({ res: 'Bienvenue dans votre API' })
});

// Export du module
module.exports = router;