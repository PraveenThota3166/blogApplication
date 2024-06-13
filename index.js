import express from "express";
import serverless from "serverless-http";
const app = express();

let titleArr = [];
let contentArr = [];

// Middleware for parsing JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index.ejs", { arr1: titleArr, arr2: contentArr });
});

app.post("/submit", (req, res) => {
    const { title, content } = req.body;
    titleArr.push(title);
    contentArr.push(content);
    res.redirect("/");
});

app.post("/delete", (req, res) => {
    const index = parseInt(req.body.index, 10);
    if (!isNaN(index) && index >= 0 && index < titleArr.length) {
        titleArr.splice(index, 1);
        contentArr.splice(index, 1);
    }
    res.redirect("/");
});
app.post("/edit", (req, res)=>{
    const index = parseInt(req.body.index, 10);
    const {title, content} = req.body;
    titleArr[index]=title;
    contentArr[index]=content;
    res.redirect("/");
})
export const handler = serverless(app);