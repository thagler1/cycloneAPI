

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
  app.get('/hurdat/:year', (req, res) => {
    const year = req.params.year;
    const data = db.collection('hurdat').find({year}).toArray((err, results) => {
      res.send(results);
      // send HTML file populated with quotes here
    });
  });
  app.get('/hurdata/all', (req, res) => {
    const data = db.collection('hurdat').aggregate([
      { $group: { _id: '$year', count: { $sum: 1 } }},
      { $sort: {_id: -1 } } ]).toArray((err, results) => {
      res.send(results);
      // send HTML file populated with quotes here
    });
  });

};
