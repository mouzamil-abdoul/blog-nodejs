const express = require('express');
const app = express();
const port = 3000;


require('./loaders')(app);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})