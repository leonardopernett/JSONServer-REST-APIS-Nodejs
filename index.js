const express = require('express');
const path = require('path');

const app = express();


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(express.static(path.resolve('public')));

app.listen(3000, ()=>console.log('server start....'))
