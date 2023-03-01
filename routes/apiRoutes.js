const express = require('express');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);
const router = express.Router();

router.get('/logout', (req, res) => {
	req.logout();
	res.redirect('/');
});

router.get('/current_user', (req, res) => {
	res.send(req.user);
});

router.post('/stripe', requireLogin, async (req, res) => {
	const charge = await stripe.charges.create({
		amount: 500,
		currency: 'usd',
		description: '$5 for 5 credits',
		source: req.body.token.id,
	});

	req.user.credits += 5;
	const user = await req.user.save();
	res.send(user);
});

module.exports = router;
