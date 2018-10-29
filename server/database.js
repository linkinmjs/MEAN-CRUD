const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mean-crud';
const URI = 'mongodb://smartmono:Mika2010@ds143603.mlab.com:43603/peruvschile'

mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;