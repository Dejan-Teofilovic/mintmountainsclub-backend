const express = require('express');
const path = require('path');
const app = express();

// Init Middleware
app.use(express.json());

// Define Routes
app.use('/api/merkleTree', require('./routes/merkleTreeRoute'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
