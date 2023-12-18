const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./components/database');
const tasksModel = require('./components/task');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/tasks', async (req, res) => {
  const tasks = await tasksModel.find({});
  res.send({ tasks: tasks });
});

app.delete('/taskD', async (req, res) => {
  const taskD = await tasksModel.deleteOne({ nameT: "Hacer ejercicio" });
  res.send({ tasks: taskD });
});

app.post('/taskP', async (req, res) => {
  const newTask = new tasksModel({
    nameT: "Hacer ejercicio",
    descriptionT: "Realizar una sesión de ejercicio de 30 minutos.",
    completeT: false
  });
  await newTask.save();
  res.send({ tasks: newTask });
});

app.listen(port, () => {
  connectDB();
  console.log(`app listening on port ${port}`);
});
