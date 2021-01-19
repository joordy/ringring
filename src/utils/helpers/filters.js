import { feedbackData } from './feedbackData.js'

// Merges dataset and chartdata together
export const filterData = async (rawData) => {
  return {
    dataset: await rawData,
    charts: await createChartdata(rawData, feedbackData),
    geojson: await rawData,
    feedbackData: await feedbackData,
  }
}

// Creates usable object with data for application
const createChartdata = (rawData, feedbackData) => {
  return {
    barChart: createBarchart(rawData),
    lineChart: createLinechart(rawData),
    positionStart: getStartLocation(rawData),
    positionEnd: getEndLocation(rawData),
    subjectChart: getFeedbackSub(feedbackData),
    feedbackLocationChart: getFeedbackLocation(feedbackData),
    avgTime: calculateAvgTime(rawData),
    avgDistance: calculateAvgDistance(rawData),
  }
}

// Get all start locations
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

// Get all end locations
const getEndLocation = (rawData) => {
  const res = rawData.features.map((item) => {
    const specificCoordinate = item.geometry.coordinates.length - 1
    const result = item.geometry.coordinates[specificCoordinate]
    return {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: checkForValue(result),
      },
    }
  })
  return {
    type: 'FeatureCollection',
    features: res,
  }
}

// Check if coordinate value is valid, otherwise specific point return
const checkForValue = (specificCoordinate) => {
  if (!specificCoordinate) {
    return [4.9, 52.38]
  } else {
    return specificCoordinate
  }
}

// Plot info about barchart
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

// Create daily count based on month values. Code adapted from: https://stackoverflow.com/questions/2013255/how-to-get-year-month-day-from-a-date-object
const createLinechart = (rawData) => {
  const res = rawData.features.map((item) => {
    let rawDay = item.properties.start
    // Transfer raw date type to iso string
    let day = new Date(rawDay)
      .toISOString()
      .replace('-', '/')
      .split('T')[0]
      .replace('-', '/')

    return day
  })

  // count all array items and sums them up
  const count = Object.create(null)
  res.forEach((item) => {
    count[item] = count[item] ? count[item] + 1 : 1
  })

  return count
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
const calculateAvgDistance = (rawData) => {
  const res = rawData.features.map((item) => {
    const distance = item.properties.distance
    return distance
  })
  const distance = res.reduce((a, b) => a + b, 0)
  return distance / rawData.features.length
}
