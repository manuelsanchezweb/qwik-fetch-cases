import { $, component$, useOnDocument, useSignal } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { getPokemons } from '~/api/get-pokemons'
import { PokemonList } from '~/components/pokemon/pokemon-list'
import { MAX_NUMBER_OF_POKEMONS } from '~/constants/constants'

export const usePokemons = routeLoader$(async () => {
  try {
    return await getPokemons(12)
  } catch (error) {
    console.error(
      'An error occurred while fetching pokemons from server',
      error
    )
    return []
  }
})

export default component$(() => {
  const { value: pokemons } = usePokemons()
  const totalPokemons = useSignal<number>(pokemons.length)

  useOnDocument(
    'scroll',
    $(() => {
      const maxPossibleScroll = document.body.scrollHeight
      const currentScroll = window.scrollY + window.innerHeight

      if (currentScroll + 100 >= maxPossibleScroll) {
        if (totalPokemons.value >= MAX_NUMBER_OF_POKEMONS) return
        totalPokemons.value += 3
      }
    })
  )

  return (
    <main>
      <div class="flex flex-col items-center text-center gap-2 my-12">
        <h1 class="text-xl md:text-5xl">Infinite Scroll</h1>
        <p>
          Cada vez que hagamos un poco de scroll vamos a cargar unos cuantos
          pokemons
        </p>
      </div>
      <PokemonList numberOfPokemonToShow={totalPokemons} />
    </main>
  )
})

export const head: DocumentHead = {
  title: 'Infinite Scroll Fetch desde el cliente',
  meta: [
    {
      name: 'description',
      content:
        'Aprende a hacer un Infinite Scroll fetch desde el cliente con Qwik',
    },
  ],
}
