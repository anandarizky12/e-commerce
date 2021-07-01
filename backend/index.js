const express = require('express');
const app = express();
const productRoutes = require('./router/router');
const userRoutes = require('./router/User/router');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config({path: "./.env"});

app.use(cors());
app.use('/user', userRoutes);
app.use('/data', productRoutes);

const PORT = process.env.PORT
const DB_URL =  process.env.DB_URL; 

mongoose.connect(DB_URL, {
    useNewUrlParser :true ,
    useUnifiedTopology : true ,
    useCreateIndex : true
}).then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
.catch(error => console.log(error.message) )