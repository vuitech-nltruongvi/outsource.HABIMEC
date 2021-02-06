const mongoose = require('mongoose');
const Runs = require('../models/runs');

// create new cause
exports.createRun = function (req, res) {
    const run = new Runs({
      ...req.body,
      _id: mongoose.Types.ObjectId()
    });
    
    return run
      .save()
      .then((newRun) => {
        return res.status(201).json({
          success: true,
          message: 'New cause created successfully',
          run: newRun,
        });
      })
      .catch((error) => {
          console.log(error);
        res.status(500).json({
          success: false,
          message: 'Server error. Please try again.',
          error: error.message,
        });
      });
}

exports.getRun = function(req, res) {
  const {id} = req.params;

  Runs.findOne({_id: id}).exec((err, results) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: 'Get data success',
        data: results
      })
    } else {
		return res.status(500).json({
			success: false,
			message: 'Server error. Please try again.',
			error: err.message,
		});
	}
  })
}

exports.getRuns = async function(req, res) {
  await Runs.find({}).sort({startDate: -1}) .exec((err, results) => {
    if (!err) {
      return res.status(200).json({
        success: true,
        message: 'Get data success',
        data: results
      })
    } else {
		res.status(500).json({
			success: false,
			message: 'Server error. Please try again.',
			error: error.message,
		});
	}
  })
}