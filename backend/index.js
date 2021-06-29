const express = require('express');
const app = express();
const productRoutes = require('./router/router');
const cors = require('cors');


app.use(cors());
app.use('/data', productRoutes);

app.listen(5000 ,()=>{
    console.log('Server Running')
})