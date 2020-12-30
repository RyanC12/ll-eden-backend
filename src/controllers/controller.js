const One = require('../models/model');

module.exports.getAllUsers = (req, res) => {
    One.find()
        .then(allUsers => res.json({ users: allUsers }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.getUser = (req, res) => {
    One.findOne({ _id: req.params.id})
        .then(oneUser => res.json({ one: oneUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.createUser = (req, res) => {
    One.create(req.body)
        .then(createUser => res.json({ one: createUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.updateUser = (req, res) => {
    One.findOne({ _id: req.params.id})
        .then(updateUser => res.json({ one: updateUser }))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};

module.exports.deleteUser = (req, res) => {
    One.findOne({ _id: req.params.id})
        .then(deleteUser => res.json({ one: deleteUser}))
        .catch(err => res.json({ message: 'Something went wrong', error: err}));
};