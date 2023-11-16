const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/TimeIT.1', { useNewUrlParser: true, UseUnifiedTopoLogy: true});


app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});


