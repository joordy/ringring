export const checkLabelColor = () => {
  let value = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (value === true) {
    return '#fff'
  } else {
    return '#000'
  }
}

export const checkPreferedTheme = (dark, light) => {
  let value = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (value === true) {
    return dark
  } else {
    return light
  }
}
