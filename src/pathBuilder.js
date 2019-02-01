import { Path } from 'react-native/Libraries/ART/ReactNativeART'

export default (values, width, height) => {
  let firstPoint = true
  // holds x and y coordinates of the previous point when iterating
  let previous = {}
  const points = []

  const minValue = Math.min(...values)
  const maxValue = Math.max(...values) - minValue
  // step between each value point on horizontal (x) axis
  const stepX = width / (values.length - 1 || 1)
  // step between each value point on vertical (y) axis
  const stepY = maxValue ? (height - 70) / maxValue : 0
  // adjust values so that min value becomes 0 and goes to the bottom edge
  const adjustedValues = values.map(value => value - minValue)

  const path = Path().moveTo(0, 0)
  // start from the left bottom corner so we could fill the area with color

  adjustedValues.forEach((number, index) => {
    const x = index * stepX
    const y = -number * stepY

    if (firstPoint) {
      // straight line to the first point
      path.lineTo(0, y)
    } else {
      // make curved line
      path.curveTo(previous.x + stepX / 3, previous.y, x - stepX / 3, y, x, y)
    }
    // save current x and y coordinates for the next point
    previous = { x, y }
    points.push(previous)
    firstPoint = false
  })
  console.log(points)
  return { line: path.lineTo(width, 0).close() }
  // line to the right bottom corner so we could fill the area with color
}
