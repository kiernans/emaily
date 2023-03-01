const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
const authRoute = require('./routes/authRoutes');
const apiRoute = require('./routes/apiRoutes');
require('./models/User');
require('./services/passport');

const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
app.use(
	cookieSession({
		maxAge: THIRTY_DAYS,
		keys: [keys.cookieKey],
	})
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRoute);
app.use('/api', apiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
