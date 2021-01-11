import { feedbackData } from './feedbackData.js'

export const filterData = (rawData) => {
  return {
    dataset: rawData,
    charts: createChartdata(rawData),
    geojson: rawData,
    feedbackData: feedbackData,
  }
}

const createChartdata = (rawData) => {
  console.log('hello, this is soon to be chartdata')
  const barchart = createBarchart(rawData)
  const linechart = createLinechart(rawData)
  const startPosition = getStartLocation(rawData)
  const lastPosition = getEndLocation(rawData)

  return {
    barChart: barchart,
    lineChart: linechart,
    positionStart: startPosition,
    positionEnd: lastPosition,
  }
}

const createBarchart = (rawData) => {
  return [30, 54, 20, 34, 15, 2]
}

const createLinechart = (rawData) => {
  return [65, 59, 80, 81, 56, 55, 40, 42, 30, 25, 20, 40]
}

const getStartLocation = (rawData) => {
  const res = rawData.features.map((item) => {
    return item.geometry.coordinates[0]
  })
  return {
    type: 'FeatureCollection',
    features: res,
  }
}

const getEndLocation = (rawData) => {
  const res = rawData.features.map((item) => {
    // return item.geometry.coordinates.length - 1

    return {
      geometry: {
        coordinates: item.geometry.coordinates.length - 1,
      },
      type: 'Feature',
    }
  })
  return {
    type: 'FeatureCollection',
    features: res,
  }
  // return {
  //   type: 'FeatureCollection',
  //   features: {
  //     geometry: { coordinates: res },
  //   },
  // }
}
