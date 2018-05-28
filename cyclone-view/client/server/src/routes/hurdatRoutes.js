

module.exports = function (app, db) {
  const collection =
    app.post('/hurdat', (req, res) => {
      const storm = req.body;
      console.log('made it to hurdat');
      db.collection('hurdat').insert(storm, (err, result) => {
        if (err) {
          res.send({ error: err });
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  app.get('/hurdat', (req, res) => {
    console.log('get request to hurdat');
    const data = db.collection('hurdat').find().toArray(function(err, results) {
      console.log(results);
      res.send(results);
      // send HTML file populated with quotes here
    })
  });
};
