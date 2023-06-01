/* import user model */
const User = require('../models/user');

/* crud controllers business logic */

/* get user */
exports.getUsers = (req, res, next) => {
    User.findAll()
        .then(users => {
            res.status(200).json({ users: users })
        })
        .catch(err => console.log(err))
}

/* get user by id */
exports.getUser = (req, res, next) => {
    /* get the id */
    const userId = req.params.userId;
    /* find by primary key */
    User.findByPk(userId)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: "user not found" })
            }
            res.json(200).json({ user: user })
        })
        .catch(err => console.log(err))
}

/* CREATE USER */
exports.createUser = (req, res, next) => {
    /* values */
    const name = req.body.name;
    const surname = req.body.surname;
    const age = req.body.age;
    /* creation if user values */
    User.create({
        name: name,
        surname: surname,
        age: age
    })
        .then(result => {
            console.log('User created');
            res.status(201).json({
                message: 'User created successfully!',
                user: result
            })
        })
        .catch(err => {
            console.log(err)
        })
}

/* update user */
exports.updateUser = (req, res, next) => {
    /* data */
    const userId = req.params.userId;
    const updatedName = req.body.name;
    const updatedSurname = req.body.name;
    const updatedAge = req.body.age;

    /* get user by id to update */
    User.findByPk(userId)
        .then(user => {
            /* if user not found */
            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }
            /* else save user data */
            user.name = updatedName;
            user.surname = updatedSurname;
            user.age = updatedAge;
            return user.save()
        })
        /* if ok user updated  */
        .then(result => {
            res.status(200).json({ message: "User updated", user: result })
        })
        /* show error if not */
        .catch(err => console.log(err))
}

/* delete user */
exports.deleteUser = (req, res, next) => {
    /* get the user id to delete */
    const userId = req.params.userId;
    User.findByPk(userId)
        /* if user not found */
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found!' })
            }
            /* delete user by id */
            return User.destroy({
                where: {
                    id: userId
                }
            })/* if 200 delete show message */
                .then(result => {
                    res.status(200).json({ message: 'User deleted' })
                })
                .catch(err => console.log(err));
        })
}