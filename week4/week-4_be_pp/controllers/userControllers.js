const User = require("../models/UserModel");

const getAllUsers = (req, res) => {
    res.json(User.getAll());
};

const createUser = (req, res) => {
    const { name, email, password, phone_number, gender, date_of_birth, membership_status } = req.body;
    const newUser = User.addOne(name, email, password, phone_number, gender, date_of_birth, membership_status);
    if (newUser) {
        res.status(201).json(newUser);
    } else {
        res.status(500).json({ message: "Fail to create User" });
    }
};

const getUserById = (req, res) => {
    const UserId = req.params.UserId;
    const UserById = User.findById(UserId);
    if (UserById) {
        res.json(UserById);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

const updateUser = (req, res) => {
    const UserId = req.params.UserId;
    const updatedData = req.body;
    const updatedUser = User.updateOneById(UserId, updatedData);
    if (updateUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

const deleteUser = (req, res) => {
    const UserId = req.params.UserId;
    const isDeleted = User.deleteOneById(UserId);
    if (isDeleted) {
        res.json({ message: "Deleted successfully" });
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
};
