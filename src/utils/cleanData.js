import { dataOne, dataTwo } from './helpers/endpoints.js'
import { getData } from './helpers/getdata.js'
import { filterData } from './helpers/filters.js'

export const cleanedData = async () => {
  const rawData = await getData(dataOne)
  const feedbackData = await getData(dataTwo)
  const clean = await filterData(rawData, feedbackData)
  return clean
}
