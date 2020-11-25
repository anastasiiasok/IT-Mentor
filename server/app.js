require('dotenv').config();
require('./src/config/dbConnect.js')
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
// const Todo = require('./Todo');
// const statusGenerator = require('./statusGenerator')

const PORT = process.env.PORT || 3000;
// const dbPATH = `mongodb://localhost:${process.env.DB_PORT}/${process.env.DB_NAME}`;

// mongoose.connect(dbPATH, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('mongoDB is connected to ', dbPATH))
//   .catch((err) => console.log('Error: ', err));


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// app.use(async (req, res, next) => setTimeout(next, 1000));
// app.get('/save', async (req, res) => {
//   console.log('getting get request');
//   let todos;
//   try {
//     todos = await Todo.find({}).lean();
//   } catch (err) {
//     console.log('Error: ', err);
//   }
//   res.status(201).json({ todos });
// });

// app.post('/save', async (req, res) => {
//   console.log('incoming data >>>', req.body);
//   try {
//     let todo = await Todo.findOne({ id: req.body.id });
//     if (todo) {
//      if (req.body.done) todo.done = req.body.done;
//      if (req.body.value) todo.value = req.body.value;
//     } else {
//       todo = new Todo(req.body);
//     }
//     await todo.save();
//   } catch (err) {
//     console.log('Error: ', err);
//   }
//   res.status(statusGenerator()).json();
// });

// app.get('/delete', async (req, res) => {
//   await Todo.deleteMany({});
//   res.status(201).json({ status: 'delete all complete' });
// });

// app.get('/delete/:id', async (req, res) => {
//   await Todo.deleteOne({ id: req.params.id });
//   res.status(201).json({ status: 'delete complete' });
// });

app.listen(PORT, () =>
  console.log('express server is running at PORT: ', PORT));
