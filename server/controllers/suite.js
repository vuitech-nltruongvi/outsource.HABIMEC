const mongoose = require('mongoose');
const Suite = require('../models/suite');

// create new cause
exports.createSuite = function (req, res) {
    const {title, successCount, failCount, pendingCount, skippedCount, browser, suites} = req.body;

    const suite = new Suite({
      _id: mongoose.Types.ObjectId(),
      title, successCount, failCount, pendingCount, skippedCount, browser, suites
    });
    
    return suite
      .save()
      .then((newSuite) => {
        return res.status(201).json({
          success: true,
          message: 'New cause created successfully',
          suite: newSuite,
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

exports.getSuite = function(req, res) {
  const {id} = req.params;

  Suite.findOne({_id: id}).exec((err, results) => {
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

exports.getSuites = async function(req, res) {
  await Suite.find({}).sort({startDate: -1}) .exec((err, results) => {
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