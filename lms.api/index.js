const hapiServer = require('./infra/server');
const db = require('./infra/db');

hapiServer.Init();
db.Init();