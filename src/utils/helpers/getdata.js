const proxyURL = 'https://cors-anywhere.herokuapp.com/'

export const getData = async (endpoint) => {
  const res = await fetch(endpoint)
  console.log(res)
  const data = await res.json()
  console.log(data)
  return data
}
