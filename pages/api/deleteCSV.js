var fs = require('fs');

export default (req, res) => {
  fs.unlink('tmp/todos.csv', (err) => {
    if (err) throw err;

    res.end();
  });
};
