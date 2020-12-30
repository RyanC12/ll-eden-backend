const One = require('../controllers/controller');

module.exports = app => {
    app.get('/api/users/', One.getAllUsers);
    app.get('/api/user/:id', One.getUser);
    app.put('/api/user/update/:id', One.updateUser);
    app.post('/api/user/new', One.createUser);
    app.delete('/api/user/delete/:id', One.deleteUser);
}