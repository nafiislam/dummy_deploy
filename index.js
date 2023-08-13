const dotenv = require('dotenv');
dotenv.config();


// connectDb();
const express=require('express');
const app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:true}));

app.set("view engine","ejs");

app.use(express.json());

const path=require('path');
app.use(express.static(path.join(__dirname, 'public')));

const homeRouter = require('./Routes/home');
app.use('/home',homeRouter);

app.get('/',(req,res)=>{
    console.log('running........');
    res.render('index') 
})

app.listen(3000,(req, res) => {
    console.log('running port........');
});
