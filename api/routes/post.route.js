import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  create,
  deletepost,
  getposts,
  updatepost,
  getAllPosts,
} from "../controllers/post.controller.js";

const router = express.Router();

router.get("/", getposts);
router.post("/create", verifyToken, create);
router.put("/updatepost/:postId/:userId", verifyToken, updatepost);
router.delete("/deletepost/:postId/:userId", verifyToken, deletepost);

export default router;
