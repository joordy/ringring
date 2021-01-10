const endpoint = 'http://ringring.jorrr.nl/data-ringring.json'
const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const getData = async () => {
  const url = await fetch(proxyURL + endpoint)
  const data = url.json()
  return data
}
