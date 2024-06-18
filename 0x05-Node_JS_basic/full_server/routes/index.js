const StudentsController = require('../controllers/StudentController');
const AppController = require('../controllers/AppController');

const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  AppController.getHomepage(req, res);
});

router.get('/students', (req, res, next) => {
  StudentsController.getAllStudents(req, res);
});

router.get('/students/:major', (req, res, next) => {
  StudentsController.getAllStudentsByMajor(req, res);
});

module.exports = router;
