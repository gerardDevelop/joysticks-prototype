const express = require('express');
const app = express();

const root = require('path').join(__dirname, 'client', 'build')
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile('index.html', { root });
})

const port = process.env.PORT || 80;
app.listen(port, () => console.log('Server running on port ' + port));