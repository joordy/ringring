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
  // const barTest = createBarchartTest(rawData)
  const linechart = createLinechart(rawData)
  const startPosition = getStartLocation(rawData)
  const lastPosition = getEndLocation(rawData)

  return {
    barChart: barchart,
    // barTest: barTest,
    lineChart: linechart,
    positionStart: startPosition,
    positionEnd: lastPosition,
  }
}

// const createBarchart = (rawData) => {
//   return [30, 54, 20, 34, 15, 2]
// }

const createLinechart = (rawData) => {
  return [5, 5, 6, 7, 8, 9, 5, 12, 13, 15, 15, 20, 23, 17, 18, 20, 12]
}

const getStartLocation = (rawData) => {
  const res = rawData.features.map((item) => {
    return {
      geometry: {
        coordinates: item.geometry.coordinates[0],
      },
      type: 'Feature',
    }
  })
  return {
    type: 'FeatureCollection',
    features: res,
  }
}

const getEndLocation = (rawData) => {
  const res = rawData.features.map((item) => {
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

    // switch (dist) {
    //   case dist > 0 && dist < 5.999:
    //     barData.cat1++
    //     break
    //   case dist > 6 && dist < 10.999:
    //     barData.cat2++
    //     break
    //   case dist > 11 && dist < 15.999:
    //     barData.cat3++
    //     break
    //   case dist > 16 && dist < 20.999:
    //     barData.cat4++
    //     break
    //   case dist > 21 && dist < 25.999:
    //     barData.cat5++
    //     break
    //   case dist > 26:
    //     barData.cat6++
    //     break

    //   default:
    //     break
    // }
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
  console.log(barData)
  return [
    barData.cat1,
    barData.cat2,
    barData.cat3,
    barData.cat4,
    barData.cat5,
    barData.cat6,
  ]
}
