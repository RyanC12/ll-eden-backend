const { Db } = require('mongodb');
const mongoose = require('mongoose');

const OneSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        auto: true
    },
    name: {type: String, minlength: 3, unique: true},
    flag: {type: Boolean},
    immunity: {type: Number},
});

const One = mongoose.model("One", OneSchema);

module.exports = One;