const mongoose = require('mongoose');


module.exports = async function () {
    await mongoose.connect('mongodb://localhost/mon-blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }, function (err) {
            if (err) {
                throw err;
            }
            console.log('db connected')
        }



    );

}