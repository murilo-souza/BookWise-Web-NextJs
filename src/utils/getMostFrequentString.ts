export const getMostFrequentString = (arr: string[]) => {
  const hashmap = arr.reduce(
    (acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )
  // eslint-disable-next-line array-callback-return
  return Object.keys(hashmap).reduce(
    (
      a,
      b, // eslint-disable-next-line no-unused-expressions
    ) =>
      // eslint-disable-next-line no-unused-expressions
      hashmap[a] > hashmap[b] ? a : b,
  )
}
