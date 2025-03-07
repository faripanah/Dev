const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require('../controllers/userControllers');

router.use(auth);

// GET /tours
router.get('/', getAllUsers);

// POST /tours
router.post('/', createUser);

// GET /tours/:tourId
router.get('/:userId', getUserById);

// PUT /tours/:tourId
router.put('/:userId', updateUser);

// DELETE /tours/:tourId
router.delete('/:userId', deleteUser);

module.exports = router;