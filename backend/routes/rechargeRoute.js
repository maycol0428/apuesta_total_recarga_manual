import express from "express";
import { rechargeCreate, rechargeGetAll, rechargeUpdate } from "../controllers/rechargeController";

const router = express.Router();

router.route("/recharge").post(rechargeCreate);
router.route("/recharges/:promoterId").get(rechargeGetAll);
router.route("/recharge/update").post(rechargeUpdate);

export const rechargeRoute = router;
