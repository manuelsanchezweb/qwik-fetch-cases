/**
 *
 * @param limit the number of pokemons to fetch
 * @param offset the offset to start from
 * @returns
 */

export const getPokemons = async (
  limit: number = 10,
  offset: number = 0
): Promise<any> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
  const data = await response.json()
  return data.results.map(({ url, name }: any) => {
    const segments = url.split('/')
    const id = segments[segments.length - 2]
    return { id, name }
  })
}
