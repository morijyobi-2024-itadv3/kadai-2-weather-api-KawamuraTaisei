// api/route.tsのテストファイル
const API_URL = 'http://localhost:3000/api'

describe("APiへのリクエスト", () => {
describe("パラメーターが正常に設定されている", () => {
  const pref = encodeURIComponent("岩手県");
  const area = encodeURIComponent("内陸");
  it("HTTP STATUSが200である", async () => {
    const response = await fetch(
      `http://localhost:3000/api?pref=${pref}&area=${area}`
    );

    expect(response.status).toBe(200);
  });
});

describe("パラメーターのprefが間違っている", () => {
  const pref = encodeURIComponent("青森県");
  const area = encodeURIComponent("内陸");
  it("HTTP STATUSが400である", async () => {
    const response = await fetch(
      `http://localhost:3000/api?pref=${pref}&area=${area}`
    );

    expect(response.status).toBe(400);
  });
});

describe("パラメーターのareaが間違っている", () => {
  const pref = encodeURIComponent("岩手県");
  const area = encodeURIComponent("沿岸");
  it("HTTP STATUSが400である", async () => {
    const response = await fetch(
      `http://localhost:3000/api?pref=${pref}&area=${area}`
    );

    expect(response.status).toBe(400);
  });
});


describe("両方のパラメーターが間違っている", () => {
  const pref = encodeURIComponent("秋田県");
  const area = encodeURIComponent("沿岸");
  it("HTTP STATUSが400である", async () => {
    const response = await fetch(
      `http://localhost:3000/api?pref=${pref}&area=${area}`
    );

    expect(response.status).toBe(400);
  });
});

describe("GETメソッド以外でアクセスされた", () => {
  const pref = '岩手県'
  const area = '内陸'
  const methods = ['POST', 'PUT', 'DELETE', 'PATCH']
  
  methods.forEach(async (method) => {
    it(`HTTP STATUSが405である`, async () => {
      const response = await fetch(`http://localhost:3000/api?pref=${pref}&area=${area}`, {
        method: method,
      });

      expect(response.status).toBe(405);
    });
  });
});
});
   