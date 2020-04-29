const express = require('express');
const app = express();
const joi =require('@hapi/joi');

app.use(express.json());

// Creating an array of objects
const fruits = [
  {name:'apples',id:1},
  {name:'bananas',id:2},
  {name:'cherries',id:3},
  {name:'dates',id:4},
  {name:'grapes',id:5},
  {name:'lemons',id:6},
  {name:'melons',id:7}
]

// Creating READ request handlers

app.get('/', (req,res) =>{
  res.send('this is my youtube channel : https://www.youtube.com/channel/UCwKxqRgEHf2hNOqYqTDEboA?view_as=subscriber');
});

// list all the fruit from array

app.get('/api/fruits', (req,res) =>{
  res.send(fruits);
});

// search for an fruit in fruits array

app.get('/api/fruits/:id', (req,res) =>{
  const fruit = fruits.find(c => c.id === parseInt(req.params.id));
  if (!fruit)res.status(404).send('fruit not found');
  res.send(fruit);
});

// CREATE Request Handler
// add new item to fruits array
app.post('/api/fruits', (req, res) => {
  // validate data
  const { error } = validateFruit(req.body);
  // check for errors and shows them
  if(error){
    res.status(400).send(error.details[0].message)
    return;
  }
  // object for the new item
  const fruit = {
    id:fruits.length + 1,
    name:req.body.name
  };
  // push() add item to the end of an array
  fruits.push(fruit);
  res.send(fruit);
});

// UPDATE Request Handler
// update an item from fruits array
app.put('/api/fruits/:id', (req, res) => {
  // search for id  in fruits array
  const fruit = fruits.find(c => c.id === parseInt(req.params.id));
  // check for id item if exist other ways show error
  if(!fruit) res.status(404).send('Fruit Not Found!');
  // validate data
  const { error } = validateFruit(req.body);
  // check for errors and shows them
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  // update fruit with value pass in body
  fruit.name = req.body.name;
  res.send(fruit);
});

// DELETE Request Handler
app.delete('/api/fruits/:id', (req, res) => {
  // search for id  in fruits array
  const fruit = fruits.find(c => c.id === parseInt(req.params.id));
  // check for id item if exist other ways show error
  if(!fruit) res.status(404).send('Fruit Not Found!');
  // indexOF() method returns position of the first currence of a specified value in a string
  const index = fruits.indexOf(fruit);
  // splice() method adds/removes items to/from an array and 
  //returns the removed item(s).
  fruits.slice(index,1);
  res.send(fruit);
});

// valication data function with joi package 

function validateFruit(fruit) {
  const schema = joi.object({
    name:joi.string().min(3).required()
  });
  const validation = schema.validate(fruit);
  return validation;
}

// setting environment PORT variable

const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`listening on port ${port} ...`));

