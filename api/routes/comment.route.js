import express from "express";
import { verifyToken } from "../utils/verifyUser.js";
import {
  createComment,
  deleteComment,
  getPostComments,
  editComment,
} from "../controllers/comment.controller.js";

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);
router.put("/editComment/:commentId", verifyToken, editComment);
router.delete('/deleteComment/:commentId', verifyToken, deleteComment);

export default router;
