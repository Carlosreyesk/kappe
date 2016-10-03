var mongoose     = require('mongoose');
var Shoe   = new mongoose.Schema({
    title: String,
    subtitle: String,
    img: String,
    sale: Boolean,
    ogprice: String,
    price: String,
    info: Boolean,
    content: Text,
    important: Boolean,
    badge: String,
    badgecolor: String,
    menu: Boolean,
    deleted: Boolean
});

module.exports = mongoose.model('Shoe', Shoe);