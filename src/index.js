const express = require('express');
const app = express();
const port = 4002;
const path = require('path');
const hbs = require('hbs')
const data = path.join(__dirname,'../public')
const templatepath = path.join(__dirname ,'../templates/views');
const partialspath = path.join(__dirname,'../templates/partials')

require('./mongodb')

console.log(data);
app.use(express.static(data))


app.set('view engine', "hbs");
app.set("views", templatepath)

hbs.registerPartials(partialspath)
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
  res.render("index")
})
app.get('/about',(req,res)=>{
  res.render("about")
})
app.get('/blog',(req,res)=>{
  res.render("blog")
})

app.get('/workout',(req,res)=>{
  res.render("workout")
});
app.get('/sign',(req,res)=>{
  res.render("sign")
});
app.get('/login',(req,res)=>{
  res.render("login")
});

app.get('*',(req,res)=>{
  res.render('404')
});

app.post("/signup",(req,res)=>{
  res.render('sign')
})

app.post("/sign",async(req,res)=>{
  const data ={
    name:req.body.name,
    password:req.body.password
  }
  await collection.insertMany([data])
  res.render('/')
})



app.listen(port,()=>{
  console.log(`server is ready to work ${port}`);
})