export const filterData = (rawData) => {
  return {
    dataset: rawData,
    charts: createChartdata(rawData),
    geojson: rawData,
  }
}

const createChartdata = (rawData) => {
  console.log('hello, this is soon to be chartdata')
  const barchart = createBarchart(rawData)
  const linechart = createLinechart(rawData)

  return {
    barChart: barchart,
    lineChart: linechart,
  }
}

const createBarchart = (rawData) => {
  return [30, 54, 20, 34, 15, 2]
}

const createLinechart = (rawData) => {
  return [65, 59, 80, 81, 56, 55, 40, 42, 30, 25, 20, 40]
}
