export const fetchData = async (url) => {
  try {
    const dataSource = await fetch(url)
    return await dataSource.json()
  } catch (err) {
    err
  }
}
