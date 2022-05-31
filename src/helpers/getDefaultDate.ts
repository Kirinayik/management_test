export const getDefaultDate = () => {
  const dateStart = new Date(new Date().getTime() - 24 * 3600 * 1000)
    .toISOString()
    .split('T')[0]
  const dateEnd = new Date(new Date().getTime()).toISOString().split('T')[0]

  return { dateStart, dateEnd }
}
