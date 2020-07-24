require('dotenv').config()
const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

// load User model
const User = require('../../models/User')

// API ROUTES
// GET api user already registered
    // if not registered, register user
// GET log people in and check their credentials agaist existing User data
// GET if already logged in, set user data to current