const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;