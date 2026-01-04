//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const _fileName = fileURLToPath(import.meta.url);
const _dirName = dirname(_fileName);
app.use(bodyParser.urlencoded({ extended: true }));
var userIsAuthorised = false;
function checkPassword(req, res, next) {
    const password = req.body["password"];
    if (password == "ILoveProgramming")
        userIsAuthorised = true;
    next();

}
app.use(checkPassword);



app.get("/", (req, res) => {
    res.sendFile(_dirName + "/public/index.html");

});
app.post("/check", (req, res) => {
    if (userIsAuthorised) {
        res.sendFile(_dirName + "/public/secret.html");
    }
    res.sendFile(_dirName + "/public/index.html");

});
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})
