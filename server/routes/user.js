import express from "express";
import userController from "../controllers/user.js";
const router = express.Router();

// All routes are here

router.get("/users", userController.getAllUsers);//use postman http://localhost:3000/api/v1/users
router.post("/users", userController.createUser);
router.get("/users/single/:id", userController.getSingleUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);
export default router;  