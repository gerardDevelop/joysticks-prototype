const express = require('express');
const app = express();
const path = require('path');

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 80;
app.listen(port, () => console.log('Server running on port ' + port));