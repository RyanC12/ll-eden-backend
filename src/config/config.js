const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/weareone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('connected'))
  .catch(err => console.log('failed with', err));