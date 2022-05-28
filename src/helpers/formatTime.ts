export const formatTime = (value: number) => {
  const time = new Date(value * 1000).toISOString().slice(11, 19)
  return +time.slice(1, 2) === 0 ? time.slice(3) : time
}
