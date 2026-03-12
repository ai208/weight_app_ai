// controller -> service -> model

const PlanModel = require("../models/PlanModel");
// ここに、AIserviceを追加する。
// const AIservicce =

class PlanService{
    static createPlan(userId,userInfo,file){
        const content = `こんにちは${userInfo.name}さん`
        const plan = PlanModel.createPlan(userId,content,file);
        return plan;
    }
    static getPlanByUserId(userId,file){
        return PlanModel.getByUserId(userId,file);
    }
    // static generateAIPlan
}

module.exports = PlanService;

