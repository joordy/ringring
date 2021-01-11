const endpoint = 'https://ringring.jorrr.nl/geojson-data-ringring.json'
const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const getData = async () => {
  try {
    const url = await fetch(proxyURL + endpoint)
    const data = await url.json()
    return data
  } catch (err) {
    err
  }
}
