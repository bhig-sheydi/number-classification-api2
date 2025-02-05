const express = require('express');
const cors = require('cors');
const classifyRoute = require('./routes/classifyRoute');

const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON
app.use('/api', classifyRoute); // Route setup

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
