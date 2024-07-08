type AreaDetail = {
  name: string
  code: string
}

export type WeatherArea = {
  area: AreaDetail
  weatherCodes: string[]
  weathers: string[]
  winds?: string[]
  waves?: string[]
}

type PopArea = {
  area: AreaDetail
  pops: string[]
}

export type TempArea = {
  area: AreaDetail
  temps: string[]
}

type TimeSeries = {
  timeDefines: string[]
  areas: Array<WeatherArea | PopArea | TempArea>
}

type TempAverageArea = {
  area: AreaDetail
  min: string
  max: string
}

type PrecipAverageArea = {
  area: AreaDetail
  min: string
  max: string
}

type JmaJson = {
  publishingOffice: string
  reportDatetime: string
  timeSeries: TimeSeries[]
  tempAverage?: {
    areas: TempAverageArea[]
  }
  precipAverage?: {
    areas: PrecipAverageArea[]
  }
}

export type JmaJsonArray = JmaJson[]
