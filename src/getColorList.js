const STATIC_COLORS = [
  '#2196f3',
  '#90caf9',
  '#6ec6ff',
  '#0069c0',
  '#c3fdff',
  '5d99c6',
]

const getColorList = size => {
  const colors = [...STATIC_COLORS]

  // for (let idx = 3; idx < size; idx += 1) {
  //   colors.push(`hsl(${Math.round(Math.random() * 360)}, 33%, 66%)`);
  // }

  return colors.slice(0, size)
}

export default getColorList
