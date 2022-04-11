import express from "express";
import { rechargeCreate, rechargeGetAll, rechargeUpdate } from "../controllers/rechargeController";
import isAuth from "../middleware/isAuth";

const router = express.Router();

router.route("/recharge").post(rechargeCreate);
router.route("/recharges/:promoterId").get(isAuth, rechargeGetAll);
router.route("/recharge/update").post(rechargeUpdate);

export const rechargeRoute = router;
