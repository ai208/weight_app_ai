// データ構造とDB操作をまとめる場所
// 定義をする

const fs = require("fs");//ファイル操作
const path = require("path");
const {v4 :uuidv4} = require("uuid");
const UserModel = require("./UserModel");

const dataFile = path.join(__dirname,"../data/plans.json");

class PlanModel{ // Dateを文字列に変更している。　pythonでもやった。
    constructor(userId,content,id = uuidv4(),date = new Date().toISOString()){
        this.id = id;
        this.userId = userId;
        this.content = content;
        this.date = date

    }
    //読み取り 最初に作る
    static getAllplans(file=dataFile){
        try{
            const data = fs.readFileSync(file,"utf-8");
            return JSON.parse(data || "[]");
        }catch(err){
            if(err.code =="ENOENT"){
                return [];
            }
            throw(err);
        }
    }
    //保存
    save(file=dataFile){
        plans = PlanModel.getAllplans(file);
        plans.push(this);
        fs.writeFileSync(file,JSON.stringify(plans,null,2));
        return this;
    }
    //作成
    static createPlan(userId,content,file= dataFile){
        const plan = new PlanModel(userId,content);
        return plan.save(file);
    }
    // useridでgetする 配列で返す
    static getByUserId(userId,file =dataFile){
        const plans = PlanModel.getAllplans(file);
        return plans.filter(p => p.userId === userId);
    }
    // idで受け取る　planで返す
    static getById(id,file=dataFile){
        const plans = PlanModel.getAllplans(file);
        return plans.find(p =>p.id ===id);
    }
}
module.exports = PlanModel;
