// server.js
const express = require('express');
const compression = require('compression')
const next = require('next')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');
const cors = require('cors');

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    server.use(compression());
    server.use(middleware)
    // server.use(logger('dev'));
    server.use(cors());
    server.use(bodyParser.json({ limit: '50mb' }));
    server.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));

    // set up mongoose
    mongoose.connect("mongodb+srv://nltruongvi:TjmWjm824594@cluster0.vzakd.mongodb.net/cypress-monitor?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log('Database connected');
        })
        .catch((error) => {
            console.log('Error connecting to database');
        });

    server.use('/api', require('./server/routes'));

    server.get('/a', (req, res) => {
        return app.render(req, res, '/a', req.query)
    })

    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) {
            throw err;
        }

        console.log(`> Ready on http://localhost:${port}`);
    });
})

function middleware(req, res, next) {
    // let ua = req.headers['user-agent'];
    // let md = req && new MobileDetect(ua);

    // if (md.mobile() && !md.tablet()) {
    //     // Mobile device
    //     res.redirect(302, 'https://m.tuoitreplus.com' + req.path);
    // } else {
    next();
    // }
}