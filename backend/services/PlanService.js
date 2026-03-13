// controller -> service -> model
const path = require("path");

const PlanModel = require("../models/PlanModel");
// ここに、AIserviceを追加する。 test用にしている。
// const AIservicce =

class PlanService{
    static createPlan(userId,userInfo){
        const file = path.join(__dirname,"../data/plans.test.json");
        const content = `こんにちは${userInfo.name}さん`
        const plan = PlanModel.createPlan(userId,content,file);
        return plan;
    }
    static getPlanByUserId(userId){
        const file = path.join(__dirname,"../data/plans.test.json");
        return PlanModel.getByUserId(userId,file);
    }
    // static generateAIPlan
}

module.exports = PlanService;

