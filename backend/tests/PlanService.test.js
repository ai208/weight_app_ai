// test jestを使っている。

const fs = require("fs");
const path = require("path");
const PlanService = require("../services/PlanService");
const testDataFile = path.join(__dirname,"../data/plans.test.json");

// testように変更する
// UserModel.dataFile = testDataFile;

beforeEach(()=>{
    // から配列で初期化する
    fs.writeFileSync(testDataFile,"[]","utf-8");
});

afterAll(()=>{
    //テスト後にファイルを削除
    fs.unlinkSync(testDataFile); 
});
// jsonをチェックをする。modelから呼び出せているか？

test("service creat get by id test",()=>{
    const userInfo ={
        id : "123",
        name : "ai",
        email :"ai.gmail"

    }
    const plan = PlanService.createPlan("123",userInfo);
    expect(plan.content).toBe( "こんにちはaiさん");
    expect(plan.userId).toBe("123");
    const plans_1 = PlanService.getPlanByUserId("123");
    expect(plans_1[0].id).toBe(plan.id);
    const plans_2 = PlanService.getPlanByUserId("1234",);
    expect(plans_2).toEqual([]);   //中身の比較 equal
})