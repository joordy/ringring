import { fetchData } from './helpers/fetchData'

const endpoint = 'https://opendata.rdw.nl/resource/mz4f-59fw.json'
export const receiveData = async () => {
  const data = await fetchData(endpoint)
  return data
}
