const https = require('https');

exports.getAllUser = async (req,res,next)=>{

  https.get('https://jsonplaceholder.typicode.com/users', (resp) => {
    let data = '';

    // A chunk of data has been received.
    resp.on('data', (chunk) => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.send(JSON.parse(data));
    });

  }).on("error", (err) => {
    res.statue(500).send(err.message);
  });
}