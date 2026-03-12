// test jestを使っている。

const fs = require("fs");
const path = require("path");
const UserModel = require("../models/WeightModel");
const WeightModel = require("../models/WeightModel");
const testDataFile = path.join(__dirname,"../data/weight.test.json");

//準備
beforeEach(()=>{
    // から配列で初期化する
    fs.writeFileSync(testDataFile,"[]","utf-8");
});

afterAll(()=>{
    //テスト後にファイルを削除
    fs.unlinkSync(testDataFile); 
});

test("get all, save,create test",()=>{
    const weight = WeightModel.createWeight("123",67,file=testDataFile);
    expect(weight.userId).toBe("123");
    expect(weight.weight).toBe(67);
    //jsonの確認
    const usersInfile = JSON.parse(fs.readFileSync(testDataFile,"utf-8"));
    expect(usersInfile.length).toBe(1);
    expect(usersInfile[0].userId).toBe("123");
})

test("get by user id test",()=>{
    const weight = WeightModel.createWeight("123",67,file=testDataFile);
    const weights_1 = WeightModel.getByUserId("123",file);
    expect(weights_1[0].userId).toBe(weight.userId); 
    expect(weights_1.length).toBeGreaterThan(0); //以上

})
test("get by id test",()=>{
    const weight_1 = WeightModel.createWeight("123",67,file=testDataFile);
    const weight_2 = WeightModel.getById(weight_1.id,file=testDataFile);
    expect(weight_1.id).toBe(weight_2.id);
})