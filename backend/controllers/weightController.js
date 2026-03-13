// ルートから受け取ったリクエストを処理する場所
// ここでサービスやDBを呼び出して、レスポンスを返す。
// routine -> controller -> service 

const express = require("express");
const router = express.Router();
const WeightService = require("../services/WeightService");

class WeightController{
    //登録用
    static createWeight(req,res){
        // const {userId,weight} = req.params; params はurlから切り取って作る。
        const {userId,weight} = req.body;

        const result = WeightService.createWeight(userId,weight);
        res.json(result);
    }
    // 最近の値を取ってくる
    static getLatestWeight(req,res){
        const userId = req.params.userId;
        const weight = WeightService.getLatestWeight(userId);
        //ない時
        if(!weight){
            return res.json({message:"no data"});
        }
        res.json(weight);

    }
}

module.exports = WeightController;

// url の確認用
exports.createWeight = (req, res) => {
  // 仮で body をそのまま返す
  res.json({
    message: "createWeight OK",
    data: req.body
  });
};
