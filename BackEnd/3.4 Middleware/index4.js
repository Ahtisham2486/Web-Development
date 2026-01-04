import express from "express";
import{dirname}from"path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
var bandName="";



const app = express();
const port = 3000;
const dir_name= dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));
// function bandNameGenerator(req, res, next){
//   console.log(req.body);
//   bandName = req.body["street"]+ req.body["pet"]
//   next();
// }
//app.use(bandNameGenerator);
app.get("/",(req,res)=>{
  res.sendFile(dir_name+"/public/index.html");
});




app.post("/submit",(req,res)=>{
  bandName= req.body["street"]+req.body["pet"];
  res.send(`<h1> Your BandName is : </h1><h2> ${bandName} </h2> `);

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
