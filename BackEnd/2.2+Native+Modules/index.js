const fs = require ("fs");
// fs.writeFile("message.txt", "hello from Ahtisham",(err)=>{
//     if(err) throw err;
//     console.log("the file has been changed")
// });
fs.readFile("./message.txt", "utf8", (err, data)=>{
    if(err){
        console.error(err) ;
        return ;

    } 
    console.log(data);
});