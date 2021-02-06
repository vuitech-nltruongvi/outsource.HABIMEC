const express = require('express');
// const { createRun, getRun, getRuns } = require('../controllers/runs');
// const { createSuite, getSuites, getSuite } = require('../controllers/suite')

const router = express.Router();

const routes = {
    index: '/'
}

router
    .get(routes.index, (req, res) => {
        return res.json({ 'message': "Hello World" })
    })
// router.post('/suites', createSuite);

// router.get('/suites', getSuites)

// router.get('/suites/:id', getSuite)

// router.post('/runs', createRun);

// router.get('/runs', getRuns)

// router.get('/runs/:id', getRun)

module.exports = router;