const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const SuiteSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    startDate: {
        type: Date,
        default: Date.now
    },
    successCount: {
        type: Number,
        default: 0
    },
    failCount: {
        type: Number,
        default: 0
    },
    pendingCount: {
        type: Number,
        default: 0
    },
    skippedCount: {
        type: Number,
        default: 0
    },
    browser: {
        type: Object
    },
    suites: Array,
    title: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('suite', SuiteSchema, 'suite');