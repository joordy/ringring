import { getData } from './helpers/getdata.js'
import { filterData } from './helpers/filters.js'

export const cleanedData = async () => {
  const rawData = await getData()
  const clean = await filterData(rawData)
  console.log(clean)
  return clean
}
