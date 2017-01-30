"use strict";
// Import dependencies
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://localhost/peerbuds';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const userSchema = new mongoose.Schema({
    "Id" : String,
    "Reputation" : String,
    "CreationDate" : String,
    "DisplayName" : String,
    "LastAccessDate" : Date,
    "WebsiteUrl" : String,
    "Location" : String,
    "AboutMe" : String,
    "Views" : String,
    "UpVotes" : String,
    "DownVotes" : String,
    "ProfileImageUrl" : String,
    "Age" : String,
    "AccountId" : String,
    created:{
      type:Date,
      default:Date.now
    }

});

// create mongoose model
const User = mongoose.model('User', userSchema);



/* GET all users. */
router.get('/users', (req, res) => {
	User.find({}).limit(100).exec( (err, user) => {
		if (err) return res.status(500).json(err)

		return res.json(user);
	});
});

/* GET one users. */
router.get('/users/:name', (req, res) => {
  const userName =  req.params.name.replace(/-/g, " ");
  console.log(userName);
	User.findOne({DisplayName:userName}, (err, user) => {
		if (err) return res.status(500).json(err)
    console.log(user);

    User.find({_id:{$ne:user._id},$or : [{Location:user.Location},{Reputation:user.Reputation}]}).limit(100).exec((err,u)=>{
      if(err) return res.json(err);

      return res.send({user:user,users:u});
    })

	});
});


module.exports = router;
