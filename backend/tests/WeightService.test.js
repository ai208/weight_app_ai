// test jestを使っている。

const fs = require("fs");
const path = require("path");
const WeightService = require("../services/WeightService");
const testDataFile = path.join(__dirname,"../data/weights.test.json");

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

test("service create latest test",()=>{
    const weight = WeightService.createWeight("123",67);
    expect(weight.userId).toBe("123");
    expect(weight.weight).toBe(67);
    const weight_1 = WeightService.getLatestWeight("123");
    expect(weight_1.id).toBe(weight.id)
    const weight_2 = WeightService.getLatestWeight("none");
    expect(weight_2).toBe(null);
})
