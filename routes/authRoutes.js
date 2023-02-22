const passport = require('passport');
const express = require('express');
const router = express.Router();

// Ask user if they grant permission
router.get(
	'/google',
	passport.authenticate('google', {
		scope: ['profile', 'email'],
	})
);

// Send request to google with code included
router.get('/google/callback', passport.authenticate('google'), (req, res) => {
	res.redirect('/surveys');
});

module.exports = router;
