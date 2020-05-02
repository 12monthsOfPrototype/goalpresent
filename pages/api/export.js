import axios from 'axios';
import { v4 as uuid } from 'uuid';

const baseURL = 'https://api.todoist.com/rest/v1/tasks';

export default (req, res) => {
  console.log(req);
  const { apiToken, tasks } = req.body;
  if (!apiToken) {
    res.status = 400;
    return 'Please add an api token';
  }

  tasks.forEach(async (task) => {
    await addTask(task, apiToken);
  });

  res.status = 200;
  res.end('Success');
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
