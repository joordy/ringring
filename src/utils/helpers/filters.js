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
    totalKM: calculateTotalKM(rawData),
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
  return barData
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

// Get total amount of feedback per subject
const getFeedbackSub = (feedbackData) => {
  let count = 0
  let overView = {
    Fietspad: count,
    Oversteekpunt: count,
    Verkeersindeling: count,
    Verkeersdrukte: count,
    Wegwerkzaamheden: count,
    Verkeerslichten: count,
    Autoverkeer: count,
    Stoplicht: count,
  }
  feedbackData.forEach((item) => {
    if (item.feedbackTag.includes('fietspad')) {
      overView.Fietspad++
    } else if (item.feedbackTag.includes('oversteekpunt')) {
      overView.Oversteekpunt++
    } else if (item.feedbackTag.includes('verkeersindeling')) {
      overView.Verkeersindeling++
    } else if (item.feedbackTag.includes('verkeersdrukte')) {
      overView.Verkeersdrukte++
    } else if (item.feedbackTag.includes('wegwerkzaamheden')) {
      overView.Wegwerkzaamheden++
    } else if (item.feedbackTag.includes('autoverkeer')) {
      overView.Autoverkeer++
    } else if (item.feedbackTag.includes('stoplicht')) {
      overView.Stoplicht++
    } else if (item.feedbackTag.includes('verkeerslichten')) {
      overView.Verkeerslichten++
    }
  })
  return overView
}

// Get total amount of feedback per location
const getFeedbackLocation = (feedbackData) => {
  let count = 0
  let overView = {
    Centrum: count,
    Noord: count,
    Oost: count,
    Zuid: count,
    West: count,
    NieuwWest: count,
    ZuidOost: count,
    Westpoort: count,
  }
  feedbackData.forEach((item) => {
    if (item.stadsdeel === 'Centrum') {
      overView.Centrum++
    } else if (item.stadsdeel === 'Noord') {
      overView.Noord++
    } else if (item.stadsdeel === 'Oost') {
      overView.Oost++
    } else if (item.stadsdeel === 'Zuid') {
      overView.Zuid++
    } else if (item.stadsdeel === 'West') {
      overView.West++
    } else if (item.stadsdeel === 'Nieuw-West') {
      overView.NieuwWest++
    } else if (item.stadsdeel === 'Zuid-Oost') {
      overView.ZuidOost++
    } else if (item.stadsdeel === 'WestPoort') {
      overView.Westpoort++
    }
  })
  return overView
}

// Calculating average time per ride
const calculateAvgTime = (rawData) => {
  const res = rawData.features.map((item) => {
    const time = item.properties.duration
    return time
  })
  const time = res.reduce((a, b) => a + b, 0)
  return time / rawData.features.length
}

// Calculating total cycled distance
const calculateTotalKM = (rawData) => {
  const res = rawData.features.map((item) => {
    const distance = item.properties.distance
    return distance
  })
  const distance = res.reduce((a, b) => a + b, 0)
  return distance
}
