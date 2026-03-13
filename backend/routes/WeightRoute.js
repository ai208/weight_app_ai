// URL と　Controller の橋渡しをする
// ex /weight への　POST や GET をどの Controller に渡すかを定義する
// urlparam(post body) → route → controller
// test はいらない

const express = require("express");
const router = express.Router();
const WeightController = require("../controllers/WeightController");

// 体重登録 body(form) -> post 
router.post("/",WeightController.createWeight)


// 最新の体重の取得 param(url) get 先頭の/を忘れない
router.get("/latest/:userId",WeightController.getLatestWeight);

module.exports = router;