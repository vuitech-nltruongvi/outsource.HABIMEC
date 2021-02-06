const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const SuiteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startedTestsAt: Date,
    endedTestsAt: Date,
    totalDuration: Number,
    totalSuites: Number,
    totalTests: Number,
    totalFailed: Number,
    totalPassed: Number,
    totalPending: Number,
    totalSkipped: Number,
    runs: Array,
    branchInfo: Object,
    browserPath: String,
    browserName: String,
    browserVersion: String,
    osName: String,
    osVersion: String,
    cypressVersion: String,
    status: String
})

module.exports = mongoose.model('runs', SuiteSchema, 'runs');