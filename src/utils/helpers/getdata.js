const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const getData = async (endpoint) => {
  try {
    const url = await fetch(proxyURL + endpoint, { responseType: 'text' })
    const data = await url.json()
    return data
  } catch (err) {
    err
  }
}
// 'https://cors-anywhere.herokuapp.com/https://ringring.jorrr.dev/data/geojson-data-ringring.json',
// { responseType: 'text' }
