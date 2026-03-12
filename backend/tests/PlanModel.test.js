// test jestを使っている。
const fs = require("fs");
const path = require("path");
const UserModel = require("../models/PlanModel");
const PlanModel = require("../models/PlanModel");
const testDataFile = path.join(__dirname,"../data/plan.test.json");


beforeEach(()=>{
    // から配列で初期化する
    fs.writeFileSync(testDataFile,"[]","utf-8");
});

afterAll(()=>{
    //テスト後にファイルを削除
    fs.unlinkSync(testDataFile); 
});

// getall,save,createのテスト
test("get all,create,save test",()=>{
    const plan = PlanModel.createPlan("123","おはようございます。",file=testDataFile);
    expect(plan.userId).toBe("123");
    expect(plan.content).toBe("おはようございます。");
    // jsonファイルの確認もする必要がある。
    const usersInfile = JSON.parse(fs.readFileSync(testDataFile,"utf-8"));
    expect(usersInfile.length).toBe(1);
    expect(usersInfile[0].userId).toBe("123");
})

// get useridのテスト
test("get by user_id test",()=>{
    const plan_1 = PlanModel.createPlan("123","おはようございます。",file = testDataFile);
    const plants_2 = PlanModel.getByUserId("123",file=testDataFile);
    expect(plants_2.length).toBeGreaterThan(0);
    expect(plan_1.id).toBe(plants_2[0].id);
})

// get idのテスト

test("get by id test",()=>{
    const plan_1= PlanModel.createPlan("123","おはようございます。",file=testDataFile);
    const plan_2 = PlanModel.getById(plan_1.id,file=testDataFile);
    expect(plan_1.id).toBe(plan_2.id);
    expect(plan_1.content).toBe(plan_2.content);
})
