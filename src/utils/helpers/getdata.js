const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const getData = async (endpoint) => {
  try {
    const url = await fetch(proxyURL + endpoint)
    console.log(url)
    const data = await url.json()
    return data
  } catch (err) {
    err
  }
}
