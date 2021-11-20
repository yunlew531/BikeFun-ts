export const getRandom = (max: number): number => Math.floor(Math.random() * max)

export const getRandomArr = (length: number, maxNum: number): number[] => {
  const arr: number[] = []
  while (arr.length <= length) {
    const random = getRandom(maxNum)

    if (!arr.includes(random)) {
      arr.push(random)
    }
  }
  return arr
}
