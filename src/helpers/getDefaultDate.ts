export const getDefaultDate = (start = 1) => {
  const dateStart = new Date(new Date().getTime() - start * 24 * 3600 * 1000)
    .toISOString()
    .split('T')[0]
  const dateEnd = new Date(new Date().getTime()).toISOString().split('T')[0]

  return { dateStart, dateEnd }
}
