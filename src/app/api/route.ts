export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pref = searchParams.get("pref");
  const area = searchParams.get("area");

  console.log(pref, area);

  const res = await fetch(
    `https://www.jma.go.jp/bosai/forecast/data/forecast/030000.json`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const weather = await res.json();

  return Response.json(weather);
}
