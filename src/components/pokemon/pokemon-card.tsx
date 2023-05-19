import { component$, useSignal, useVisibleTask$ } from '@builder.io/qwik'
import { delay, getBackgroundColor } from '~/utils/utils'

export const PokemonCard = component$(({ id = 1 }: { id: number }) => {
  const pokemonData: any = useSignal(null)
  const loading = useSignal(true)

  useVisibleTask$(async () => {
    try {
      await delay(0.2)
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      pokemonData.value = data
      loading.value = false
    } catch (error) {
      console.log(error)
    }
  })

  return (
    <>
      {loading.value == true ? (
        <div class="animate-pulse">
          <div class="min-h-[360px] w-[300px] bg-gray-400 flex flex-col justify-center items-center border-2 border-black rounded-md p-8">
            <div class="h-32 w-32 bg-gray-700 rounded-full"></div>
            <div class="h-8 w-32 bg-gray-700 rounded-md my-2"></div>
            <div>
              <div class="h-4 w-32 bg-gray-700 rounded-md mb-2"></div>
              <div>
                <div class="h-4 w-32 bg-gray-700 rounded-md mt-2"></div>
                <div class="h-4 w-32 bg-gray-700 rounded-md mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: getBackgroundColor(
              pokemonData.value.types[0].type.name
            ),
          }}
          class="min-h-[360px] w-[300px] flex flex-col justify-center items-center border-2 border-black rounded-md p-8"
        >
          <img
            height={128}
            width={128}
            class="h-32 w-32"
            src={pokemonData.value?.sprites?.front_default}
            alt={pokemonData.value?.name}
          />
          <h2 class="text-3xl mb-8">{pokemonData.value?.name}</h2>
          <div>
            <h3 class="text-md mb-2 underline">Favourite techniques:</h3>
            <ul>
              {pokemonData.value?.abilities?.map((move: any) => (
                <li key={move.ability.name}>- {move.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
})
