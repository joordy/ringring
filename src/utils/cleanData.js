import { getData } from './helpers/getdata.js'
import { filterData } from './clean/filters.js'

export const cleanedData = async () => {
  const rawData = await getData()
  const clean = await filterData(rawData)
  // const test = await abc(rawData)
  // console.log(clean)
  return clean
}

// function abc(rawData) {
//   let count = 0
//   let barchartData = {
//     cat1: count,
//     cat2: count,
//     cat3: count,
//     cat4: count,
//     cat5: count,
//     cat6: count,
//   }
//   rawData.forEach((elem) => {
//     if (elem > 0 && elem.properties.distance < 5.999) {
//       count++
//       console.log('greather than 0')
//     } else if (
//       elem.properties.distance > 6 &&
//       elem.properties.distance < 10.999
//     ) {
//       console.log('greather than 6')
//     } else if (
//       elem.properties.distance > 11 &&
//       elem.properties.distance < 15.999
//     ) {
//       console.log('greather than 11')
//     } else if (
//       elem.properties.distance > 16 &&
//       elem.properties.distance < 20.999
//     ) {
//       console.log('greather than 16')
//     } else if (
//       elem.properties.distance > 21 &&
//       elem.properties.distance < 25.999
//     ) {
//       console.log('greather than 21')
//     } else if (elem.properties.distance > 26) {
//       console.log('greather than 26')
//     }
//   })
//   console.log(barchartData)
// }
