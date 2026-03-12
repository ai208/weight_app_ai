// test jestを使っている。
const fs = require("fs");
const path = require("path");
const UserModel = require("../models/PlanModel");
const testDataFile = path.join(__dirname,"../data/plan.test.json");


beforeEach(()=>{
    // から配列で初期化する
    fs.writeFileSync(testDataFile,"[]","utf-8");
});

afterAll(()=>{
    //テスト後にファイルを削除
    fs.unlinkSync(testDataFile); 
});

test("getall,create,save test")