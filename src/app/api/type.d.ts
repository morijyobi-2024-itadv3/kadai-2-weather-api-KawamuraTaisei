export type TypeResponse = {
  pref: string
  area: string
  today: {
    todaySky: string
    tempHigh: string
    tempLow: string
  }
  tomorrow: {
    tomorrowSky: string
    tempHigh: string
    tempLow: string
  }
}
