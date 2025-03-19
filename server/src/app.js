const exress = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');


const app = exress();

app.use(morgan('combined'))
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req,res) =>{
    res.send("hello word")
})


app.listen(process.env.PORT || 8081, ()=>{
    console.log("listening on 8081");

    
})