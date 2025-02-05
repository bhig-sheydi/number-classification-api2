const express = require('express');
const classifyNumber = require('../api/classifyNumber');

const router = express.Router();

router.get('/classify-number', async (req, res) => {
    try {
        const { number } = req.query;

        if (!number || isNaN(number)) {
            return res.status(400).json({ number, error: true, message: "Invalid number format" });
        }

        const num = parseInt(number, 10);
        const result = await classifyNumber(num);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: true, message: "Internal Server Error" });
    }
});

module.exports = router;
