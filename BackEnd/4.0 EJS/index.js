import express from "express";
const app = express();
const port = 4000;

app.get("/", (req, res) => {

    const today=new Date("June 24, 2023 01:15:00");
    const day= today.getDay();

    let Type= "a weekday";
    let adv= "its time to work hard";

    if(day===0||day===6){
        Type="A WeekEnd";
        adv="Its time to chill";
    }
   // console.log(day);
    res.render("index.ejs", {
        dayType: Type,
        advice:adv,
    });
});





app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});