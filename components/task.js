const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
    },
    priority: {
        type: String,
        enum: ['High', 'Medium', 'Low'],
        default: 'Medium',
    },
});

const taskListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    tasks: [taskSchema],
});

const TaskList = mongoose.model('TaskList', taskListSchema);

module.exports = TaskList;
