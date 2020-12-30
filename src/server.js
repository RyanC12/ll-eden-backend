const express = require('express');
const app = express();
const cors = require('cors');

require('./config/config');

app.use(cors());
app.use(express.json(), express.urlencoded({
    extended: true
}));

const AllOneRoutes = require('./routes/routes');
AllOneRoutes(app);


app.listen(8000, () => console.log('Server is running on port 8000'));