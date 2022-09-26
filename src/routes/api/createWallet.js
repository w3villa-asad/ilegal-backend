// import express from "express";
const express = require("express");
// import { createServer } from "http")
// import { requireAuth } from "../../middlewares";
// import { isValid } from "../../middlewares/validToken";
// import UserWalletCtrl from "../../controllers/userWalletController";
const UserWalletCtrl = require("../../controllers/userWalletController");
// require("../../controllers/index");

const router = express.Router();

router.post("/createWallet", [UserWalletCtrl.createWallet]);
router.get("/getEthBalance", [UserWalletCtrl.getEthBalance]);
// router.get("/getUtilityBalance", [isValid, UserWalletCtrl.getUtilityBalance]);
// router.post("/transferQANOON",[isValid, UserWalletCtrl.transferQANOON]);
// router.get("/transferHistory",[isValid,UserWalletCtrl.transferHistory]);

module.exports = router;