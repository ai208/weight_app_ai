// ルートから受け取ったリクエストを処理する場所
// ここでサービスやDBを呼び出して、レスポンスを返す。
// routine -> controller -> service 

const express = require("express");
const router = express.Router();
const WeightService = require("../services/WeightService");