const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    title: String,
    subTitle: String,
    description: String
});


module.exports = mongoose.model('Item', ItemSchema);
