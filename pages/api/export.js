import axios from 'axios';
import { v4 as uuid } from 'uuid';
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const baseURL = 'https://api.todoist.com/rest/v1/tasks';

export default (req, res) => {
  const { method, apiToken, tasks } = req.body;
  if (method === 'token') {
    if (!apiToken) {
      return 'Please add an api token';
    }

    tasks.forEach(async (task) => {
      await addTask(task, apiToken);
    });

    res.end('Success');
  } else {
    const csvWriter = createCsvWriter({
      path: 'public/tmp/todos.csv',
      header: [
        { id: 'type', title: 'TYPE' },
        { id: 'content', title: 'CONTENT' },
        { id: 'priority', title: 'PRIORITY' },
        { id: 'due_date', title: 'DATE' },
      ],
    });

    const data = [];
    tasks.forEach((task) => {
      data.push({
        type: 'task',
        content: task.content,
        priority: 1,
        due_date: task.due_date,
      });
    });

    csvWriter.writeRecords(data).then(() => {
      res.end('Success');
    });

    //TODO: Clean up after csv was downloaded
  }
};

const addTask = async (task, apiToken) => {
  // We create the structure expected by the Todoist API.
  const { content, due_string } = task;
  const taskObject = { content, due_string, priority: 4 };
  try {
    const response = await axios.post(baseURL, JSON.stringify(taskObject), {
      headers: {
        Authorization: `Bearer ${apiToken}`,
        'X-Request-Id': uuid(),
        'Content-Type': 'application/json',
      },
    });
    const { content } = response.data;
    return content;
  } catch (error) {
    console.log('error', error.response.status, error.response.data);
    // We return a very basic error if something goes wrong.
    return 'There was an issue adding the task.';
  }
};
