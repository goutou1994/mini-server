const express = require('express');
const config = require('./config.json');
const app = express();

for (let entry of config.entries) {
    app.use(entry.url, express.static(entry.local));
}

console.log(`listening on port ${config.port || 8080}...`);
app.listen(config.port || 8080);
