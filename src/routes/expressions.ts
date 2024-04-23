import express from "express";
import * as ExpressionController from "../controllers/expressions";

const router = express.Router();

router.get("/evaluate/:expression", ExpressionController.evaluate);

export default router;