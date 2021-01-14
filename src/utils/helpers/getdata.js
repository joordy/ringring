// const endpoint = 'https://ringring.jorrr.nl/geojson-data-ringring.json'
// const endpoint = 'https://data.jorrr.nl/ringring/data.json'
// const proxyURL = 'https://cors-anywhere.herokuapp.com/'
// const endpoint = 'https://opendata.rdw.nl/resource/mz4f-59fw.json'

// const endpoint = 'https://cors-anywhere.herokuapp.com/https://ringring.jorrr.nl/geojson-data-ringring.json'
const endpoint =
  'https://cors-anywhere.herokuapp.com/https://data.jorrr.nl/ringring/data.json'
// const endpoint = 'https://cors-anywhere.herokuapp.com/https://data.jorrr.nl/ringring/geojson-data-ringring.json'
// const endpoint = 'https://cors-anywhere.herokuapp.com/https://data.jorrr.nl/ringring/data-ringring.json'

export const getData = async () => {
  try {
    const url = await fetch(endpoint)
    const data = await url.json()
    return data
  } catch (err) {
    err
  }
}
