import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createComment,
  deleteComment,
  editComment,
  getPostComments,
  getcomments,
  likeComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.get("/", verifyToken, getcomments); // [need admin] get all comments
router.get("/:postId", getPostComments); // get by post
router.post("/", verifyToken, createComment); // [need user] create comment
router.put("/:commentId", verifyToken, editComment); // [need user] edit comment
router.delete("/:commentId", verifyToken, deleteComment); // [need user] delete comment

router.put("/likeComment/:commentId", verifyToken, likeComment);

export default router;
