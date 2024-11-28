import asyncHandler from "../utils/asyncHandler.js";
const registerUser = asyncHandler(async (req, res) => {
    
});

const createUser = (req, res) => {
  res.send("Get User");
};

const getUserById = (req, res) => {
  res.send("Get User");
};
const updateUser = (req, res) => {
  res.send(" User");
};
const deleteUser = (req, res) => {
  res.send("Get User");
};

export { registerUser, createUser, getUserById, updateUser, deleteUser };
