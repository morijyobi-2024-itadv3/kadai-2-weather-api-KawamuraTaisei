import { TypeResponse } from '@/app/api/type'
import { type JmaJsonArray, type TempArea, type WeatherArea } from '@/app/api/type.jma'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const pref = searchParams.get('pref')
  const area = searchParams.get('area')

  console.log(pref, area)

  if (pref !== '岩手県' || area !== '内陸') {
    return new Response('Invalid parameter', { status: 400 })
  }

  const res = await fetch(
    `https://www.jma.go.jp/bosai/forecast/data/forecast/030000.json`,
    { next: { revalidate: 3600 } },
  )

  const jma_json: JmaJsonArray = await res.json()

  const response: TypeResponse = {
    pref: pref,
    area: area,
    today: {
      todaySky: (jma_json[0].timeSeries[0].areas[0] as WeatherArea).weathers[0],
      tempHigh: (jma_json[0].timeSeries[2].areas[0] as TempArea).temps[1],
      tempLow: '-',
    },
    tomorrow: {
      tomorrowSky: (jma_json[0].timeSeries[0].areas[0] as WeatherArea)
        .weathers[1],
      tempHigh: (jma_json[0].timeSeries[2].areas[0] as TempArea).temps[3],
      tempLow: (jma_json[0].timeSeries[2].areas[0] as TempArea).temps[2],
    },
  }

  return Response.json(response, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
