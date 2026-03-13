// test jestを使っている。

const fs = require("fs");
const path = require("path");
const WeightService = require("../services/WeightService");
const WeightController = require("../controllers/WeightController.js");
const testDataFile = path.join(__dirname,"../data/weights.test.json");
jest.mock("../services/WeightService");

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

test("weight controller latest test",()=>{
    // fake req
    const req = {
        params:{userId:1}
    };
    // fake res
    const res = {
        json:jest.fn(),
        status: jest.fn().mockReturnThis()
    }

    // service mock
    WeightService.getLatestWeight.mockReturnValue({
        weight:70
    });
    WeightController.getLatestWeight(req,res);
    expect(res.json).toHaveBeenCalledWith({ 
        weight:70
    });
})

test("weight controller latest test no data",()=>{
    // fake req
    const req = {
        params:{userId:1}
    };
    // fake res
    const res = {
        json:jest.fn(),
        status: jest.fn().mockReturnThis()
    }

    // service mock
    WeightService.getLatestWeight.mockReturnValue(null);
    WeightController.getLatestWeight(req,res);
    expect(res.json).toHaveBeenCalledWith({message:"no data"});
})

test("weight controller create",()=>{
    // fake req
    const req = {
        body:{userId:1,weight:65} //コントローラーに合わせて変更する
    };
    // fake res
    const res = {
        json:jest.fn(),
        status: jest.fn().mockReturnThis()
    }

    // service mock 
    WeightService.createWeight.mockReturnValue({
        userId:1,weight:65
    });
    WeightController.createWeight(req,res);
    expect(res.json).toHaveBeenCalledWith({
        userId:1,weight:65
    });
    expect(WeightService.createWeight).toHaveBeenCalledWith(1,65); //サービスが正しく呼ばれたか？

})