const express = require("express");
const app = express();
const port = 4000
const router = express.Router();

router.get('/', function(req,res){
    console.log("Router Working");
    res.end();
})
app.use(router);

app.listen(port, function(err){
    if (err) console.log(err);
    console.log("Server listening on port",port);
});

