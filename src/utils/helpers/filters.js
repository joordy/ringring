import { feedbackData } from './feedbackData.js'

export const filterData = async (rawData) => {
  return {
    dataset: await rawData,
    charts: await createChartdata(rawData, feedbackData),
    geojson: await rawData,
    feedbackData: await feedbackData,
  }
}

const createChartdata = (rawData, feedbackData) => {
  // const barchart = createBarchart(rawData)
  // const linechart = createLinechart(rawData)
  // const lineTest = createLinechartTest(rawData)
  // const startPosition = getStartLocation(rawData)
  // const lastPosition = getEndLocation(rawData)
  // const averageDuration = getAvgTime(rawData)
  // const subjectChart = getFeedbackSub(feedbackData)
  // const stadsdeelChart = getFeedbackLocation(feedbackData)
  return {
    barChart: createBarchart(rawData),
    lineChart: createLinechart(rawData),
    lineTest: createLinechartTest(rawData),
    positionStart: getStartLocation(rawData),
    positionEnd: getEndLocation(rawData),
    subjectChart: getFeedbackSub(feedbackData),
    feedbackLocationChart: getFeedbackLocation(feedbackData),
    avgTrip: calculateAvgTime(rawData),
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
    9,
    9,
    9,
    10,
    12,
    15,
    12,
    15,
    15,
    20,
    23,
    17,
    18,
    20,
    12,
    13,
    15,
    16,
    16,
    16.5,
    16,
    10,
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
  return [
    lineData.jan1,
    lineData.jan2,
    lineData.jan3,
    lineData.jan4,
    lineData.jan5,
    lineData.jan6,
  ]
}

const getAvgTime = (rawData) => {
  // console.log(rawData)
}

const getFeedbackSub = (feedbackData) => {
  let count = 0
  let donutData = {
    fietspad: count,
    oversteekpunt: count,
    verkeersindeling: count,
    verkeersdrukte: count,
    wegwerkzaamheden: count,
    verkeerslichten: count,
    autoverkeer: count,
    stoplicht: count,
  }
  feedbackData.forEach((item) => {
    if (item.feedbackTag.includes('fietspad')) {
      donutData.fietspad++
    } else if (item.feedbackTag.includes('oversteekpunt')) {
      donutData.oversteekpunt++
    } else if (item.feedbackTag.includes('verkeersindeling')) {
      donutData.verkeersindeling++
    } else if (item.feedbackTag.includes('verkeersdrukte')) {
      donutData.verkeersdrukte++
    } else if (item.feedbackTag.includes('wegwerkzaamheden')) {
      donutData.wegwerkzaamheden++
    } else if (item.feedbackTag.includes('autoverkeer')) {
      donutData.autoverkeer++
    } else if (item.feedbackTag.includes('stoplicht')) {
      donutData.stoplicht++
    } else if (item.feedbackTag.includes('verkeerslichten')) {
      donutData.verkeerslichten++
    }
  })
  return donutData
}

const getFeedbackLocation = (feedbackData) => {
  let count = 0
  let donutData = {
    centrum: count,
    noord: count,
    oost: count,
    zuid: count,
    west: count,
    nieuwWest: count,
    zuidOost: count,
    westpoort: count,
  }
  feedbackData.forEach((item) => {
    if (item.stadsdeel === 'Centrum') {
      donutData.centrum++
    } else if (item.stadsdeel === 'Noord') {
      donutData.noord++
    } else if (item.stadsdeel === 'Oost') {
      donutData.oost++
    } else if (item.stadsdeel === 'Zuid') {
      donutData.zuid++
    } else if (item.stadsdeel === 'West') {
      donutData.west++
    } else if (item.stadsdeel === 'Nieuw-West') {
      donutData.nieuwWest++
    } else if (item.stadsdeel === 'Zuid-Oost') {
      donutData.zuidOost++
    } else if (item.stadsdeel === 'WestPoort') {
      donutData.westpoort++
    }
  })
  return donutData
}

const calculateAvgTime = (rawData) => {
  const res = rawData.features.map((item) => {
    const time = item.properties.duration
    return time
  })
  const time = res.reduce((a, b) => a + b, 0)
  return time / rawData.features.length
}
