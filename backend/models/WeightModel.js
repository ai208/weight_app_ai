// データ構造とDB操作をまとめる場所
const fs = require("fs");//ファイル操作
const path = require("path");
const {v4 :uuidv4} = require("uuid");

const dataFile = path.join(__dirname,"../data/plans.json");

class WeightModel{
    constructor(userId,weight,id = uuidv4(),date =new Date().toISOString){
        this.id = id;
        this.userId=userId;
        this.weight = weight;
        this.date = date;
    }
    // 最初にgetAll weight
    static getAllWeight(file=dataFile){
        try{
            const data = fs.readFileSync(file,"utf-8");//読み取り
            return JSON.parse(data || "[]"); // json → js の配列に からのときも
        }catch(err){
            if(err.code==="ENOENT"){
                return []; //ない時はから配列
            }
            throw err;//エラーが表示される
        }
    }
    // 保存
    save(file=dataFile){
        const weights = WeightModel.getAllWeight(file);
        weights.push(this); // thisをfileにsaveする
        fs.writeFileSync(file,JSON.stringify(weights,null,2)); //書き直し
        return this;
    }
    // create
    static createWeight(userId,weight,file=dataFile){
        const w = new WeightModel(userId,weight);
        return w.save(file); //wをfileにsaveする
        
    }
    // get by userId
    static getByUserId(userId,file=dataFile){
        const weights = WeightModel.getAllWeight(file);
        return weights.filter(w => w.userId === userId); 
    }
    // get by id
    static getById(id,file=dataFile){
        const weights= WeightModel.getAllWeight(file);
        return weights.find(w => w.id ===id);
    }
}

module.exports = WeightModel;
