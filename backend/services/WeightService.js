// controller -> service -> model
const path = require("path");
const WeightModel = require("../models/WeightModel");
// serviceがファイルを決める test用にしている。
class WeightService{
    // 新規作成
    static createWeight(userId,weight){
        const file = path.join(__dirname,"../data/weights.test.json");
        return WeightModel.createWeight(userId,weight,file);
    }
    //最新の値を取得
    static getLatestWeight(userId){
        const file = path.join(__dirname,"../data/weights.test.json");
        const weights = WeightModel.getByUserId(userId,file);
        return weights.length ? weights[weights.length-1] : null // あれば最後のもの なければnull
    }
    
}
module.exports = WeightService;