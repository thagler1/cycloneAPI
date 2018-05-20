

module.exports = function(app, db) {
    const collection = 


    app.post('/hurdat', (req, res) => {
      const storm = req.body;
      db.collection('hurdat').insert(storm, (err, result) => {
        if (err) { 
          res.send({ 'error': err }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };