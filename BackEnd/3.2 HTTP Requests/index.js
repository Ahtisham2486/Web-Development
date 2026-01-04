import express from "express";
const app = express();
const port =3500;
app.get("/",(req,res)=>{
  res.send("<h1>Home lone</h1> ");
});
app.get("/about",(req,res)=>{
    res.send("<h1>Home about me</h1> ");
  });
  app.get("/contact",(req,res)=>{
    res.send("<h1>contact </h1> ");
  })

app.listen(port,()=>{
    console.log(`server is running on port ${port} `);
});