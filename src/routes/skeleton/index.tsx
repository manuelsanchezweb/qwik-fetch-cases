import { component$, useSignal } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'
import { PokemonList } from '~/components/pokemon/pokemon-list'

export default component$(() => {
  const totalPokemons = useSignal<number>(21)

  return (
    <main>
      <div class="flex flex-col items-center text-center gap-2 my-12">
        <h1 class="text-xl md:text-5xl">Skeleton</h1>
        <p>
          Vamos a mostrar una especie de boilerplate mientras hacemos fetch de
          los datos.
        </p>
      </div>
      <PokemonList numberOfPokemonToShow={totalPokemons} hasLoadMoreButton />
    </main>
  )
})

export const head: DocumentHead = {
  title: 'Skeleton Fetch desde el cliente',
  meta: [
    {
      name: 'description',
      content: 'Aprende a hacer un skeleton fetch desde el cliente con Qwik',
    },
  ],
}
