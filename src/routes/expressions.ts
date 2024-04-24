import express from "express";
import * as ExpressionController from "../controllers/expressions";

const router = express.Router();

router.post("/evaluate/", ExpressionController.evaluate);

export default router;