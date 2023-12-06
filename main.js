let express = require("express");
let PORT = 8001;

let app = express();
app.use(express.json())

app.get("/add", function(req, res){
    let num1 = parseInt(req.query.num1, 10) || 5;
    let num2 = parseInt(req.query.num2, 10) || 4;

    const sum = num1 + num2;

    res.send(`The sum of ${num1} and ${num2} is ${sum}`)
})



app.post("/double/:num", function(req, res){

    let inputNumber = parseInt(req.params.num, 5);
    if (isNaN(inputNumber)){
        return res.status(400).send("This is not a number try again")

    }

    let result = inputNumber * 2;

    res.send(`The double of ${inputNumber} is ${result}`)

})

app.put("/multiply", function(req, res){
let num1 = parseInt(req.query.num1, 10) || 15;
let num2 = parseInt(req.query.num2, 10) || 3;

if(num1 === undefined || num2 === undefined){
    return res.status(400).send("Please provide both num1 and num2 in the request body")
}

const result = num1 * num2;

res.send(`The product of ${num1} and ${num2} is: ${result}`)
})

app.listen(PORT, function(){
    console.log("Application is running on port", PORT)
})