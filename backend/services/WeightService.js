// controller -> service -> model

const WeightModel = require("../models/WeightModel");

class WeightService{
    // 新規作成
    static createWeight(userId,weight,file){
        return WeightModel.createWeight(userId,weight,file);
    }
    //最新の値を取得
    static getLatestWeight(userId,file){
        const weights = WeightModel.getByUserId(userId,file);
        return weights.length ? weights[weights.length-1] : null // あれば最後のもの なければnull
    }
    
}
module.exports = WeightService;