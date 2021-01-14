// const endpoint = 'https://ringring.jorrr.nl/geojson-data-ringring.json'
// const endpoint = 'https://data.jorrr.nl/ringring/data.json'
const proxyURL = 'https://cors-anywhere.herokuapp.com/'
// const endpoint = 'https://opendata.rdw.nl/resource/mz4f-59fw.json'
// const endpoint = 'https://ringring.jorrr.nl/geojson-data-ringring.json'
const endpoint = 'https://data.jorrr.nl/ringring/data.json'
// const endpoint = 'https://data.jorrr.nl/ringring/geojson-data-ringring.json'

// const endpoint = 'https://ringring.jorrr.nl/geojson-data-ringring.json'
// const endpoint = 'https://cors-anywhere.herokuapp.com/https://data.jorrr.nl/ringring/data.json'
// const endpoint =
//   'https://cors-anywhere.herokuapp.com/https://data.jorrr.nl/ringring/geojson-data-ringring.json'
// const endpoint =
//   'https://cors-anywhere.herokuapp.com/https://data.jorrr.nl/ringring/data-ringring.json'
// const endpoint = 'https://data.jorrr.nl/ringring/data-ringring.json'

export const getData = async () => {
  try {
    console.log(proxyURL + endpoint)
    const url = await fetch(proxyURL + endpoint)
    console.log(url)
    const data = await url.json()
    console.log(data)
    return data
  } catch (err) {
    err
  }
}
