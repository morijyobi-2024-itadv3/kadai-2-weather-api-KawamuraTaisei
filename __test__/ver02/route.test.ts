// api/route.tsのテストファイル

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

    expect(response.status).toBe(500);
  });
});
