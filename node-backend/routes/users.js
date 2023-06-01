/* intantiate controller */
const controller = require('../controllers/users')
const router = require('express').Router(); /* express router */

/* crud routes /users */
router.get('/', controller.getUsers) /* get users all info */
router.get('/:userId', controller.getUser); /* get user by id */
router.post('/', controller.createUser) /* create user */
router.put('/:userId', controller.updateUser) /* update user by id */

module.exports = router;