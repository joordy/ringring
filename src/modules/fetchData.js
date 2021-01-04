import { endpoint } from './utils/entry.js'
import { receiveData } from './utils/helpers.js'

export const cleanMyData = async () => {
  const dataset = await receiveData(endpoint)
  console.log(dataset)
  return dataset
}
