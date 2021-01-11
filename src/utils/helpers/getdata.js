// const endpoint = 'http://ringring.jorrr.nl/data-ringring.json'

// const endpoint = 'https://ringring.jorrr.nl/geojson-data-ringring.json'
// const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const getData = async () => {
  try {
    // const url = await fetch(proxyURL + endpoint)
    const url = await fetch(
      'https://cors-anywhere.herokuapp.com/http://ringring.jorrr.nl/geojson-data-ringring.json'
    )
    const data = await url.json()
    return data
  } catch (err) {
    err
  }
}
