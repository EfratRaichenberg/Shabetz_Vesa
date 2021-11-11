const express = require('express');
const app = express();
//const __name='final-project\shabetz_vesa-react\src';

// app.get('/' ,(req,res) => {
//     res.status(200);
//     res.sendFile(__name +'/App.js',{ root: 'final-project' });
//     res.send("hi");
//     res.end();
// });

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.post("/post", (req, res) => {
    console.log("Connected to React");
    res.send("efrat");
    res.redirect("/");
  });

module.exports=app;