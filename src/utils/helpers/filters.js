import { feedbackData } from './feedbackData.js'

export const filterData = (rawData) => {
  // console.log(rawData)
  return {
    dataset: rawData,
    charts: createChartdata(rawData),
    geojson: rawData,
    feedbackData: feedbackData,
  }
}

const createChartdata = (rawData) => {
  const barchart = createBarchart(rawData)
  const linechart = createLinechart(rawData)
  const lineTest = createLinechartTest(rawData)
  const startPosition = getStartLocation(rawData)
  const lastPosition = getEndLocation(rawData)
  const averageDuration = getAvgTime(rawData)
  return {
    barChart: barchart,
    averageTime: averageDuration,
    // barTest: barTest,
    lineChart: linechart,
    lineTest: lineTest,
    positionStart: startPosition,
    positionEnd: lastPosition,
  }
}

const getStartLocation = (rawData) => {
  const res = rawData.features.map((item) => {
    const specificCoordinate = item.geometry.coordinates[0]
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: checkForValue(specificCoordinate),
      },
    }
  })
  return {
    type: 'FeatureCollection',
    features: res,
  }
}

const getEndLocation = (rawData) => {
  const res = rawData.features.map((item) => {
    const specificCoordinate = item.geometry.coordinates.length - 1
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: checkForValue(specificCoordinate),
      },
    }
  })
  return {
    type: 'FeatureCollection',
    features: res,
  }
}

const checkForValue = (specificCoordinate) => {
  if (!specificCoordinate) {
    return [4.9, 52.38]
  } else {
    return specificCoordinate
  }
}

const createBarchart = (rawData) => {
  let count = 0
  let barData = {
    cat1: count,
    cat2: count,
    cat3: count,
    cat4: count,
    cat5: count,
    cat6: count,
  }
  rawData.features.forEach((elem) => {
    let dist = elem.properties.distance
    if (dist > 0 && dist < 5.999) {
      barData.cat1++
    } else if (dist > 6 && dist < 10.999) {
      barData.cat2++
    } else if (dist > 11 && dist < 15.999) {
      barData.cat3++
    } else if (dist > 16 && dist < 20.999) {
      barData.cat4++
    } else if (dist > 21 && dist < 25.999) {
      barData.cat5++
    } else if (dist > 26) {
      barData.cat6++
    }
  })
  return [
    barData.cat1,
    barData.cat2,
    barData.cat3,
    barData.cat4,
    barData.cat5,
    barData.cat6,
  ]
}

const createLinechart = (rawData) => {
  return [
    6,
    7,
    8,
    9,
    5,
    12,
    13,
    15,
    15,
    20,
    23,
    17,
    18,
    20,
    12,
    5,
    5,
    6,
    7,
    8,
    9,
    5,
    12,
    13,
    15,
    15,
    20,
    23,
    17,
    18,
    20,
  ]
}

const createLinechartTest = (rawData) => {
  let count = 0
  let lineData = {
    jan1: count,
    jan2: count,
    jan3: count,
    jan4: count,
    jan5: count,
    jan6: count,
  }
  // let d = new Date('2020-01-31T01:01:13Z')
  // console.log(d)
  // console.log(d.getUTCHours())
  // console.log(d.getUTCMinutes())
  // console.log(d.getUTCDay())
  // console.log(d.getUTCMonth())
  // console.log(d.getUTCDate())

  // let date = `${d.getUTCHours()}:${d.getUTCMinutes()}`
  // console.log(date)
  return [
    lineData.jan1,
    lineData.jan2,
    lineData.jan3,
    lineData.jan4,
    lineData.jan5,
    lineData.jan6,
  ]
  // return [5, 5, 6, 7, 8, 9, 5, 12, 13, 15, 15, 20, 23, 17, 18, 20, 12]
}

const getAvgTime = (rawData) => {
  // console.log(rawData)
}
