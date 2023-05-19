import { $, type Signal, component$ } from '@builder.io/qwik'
import { PokemonCard } from './pokemon-card'
import { MAX_NUMBER_OF_POKEMONS } from '~/constants/constants'

type PokemonListProps = {
  numberOfPokemonToShow: Signal<number>
  hasLoadMoreButton?: boolean
}

export const PokemonList = component$(
  ({ numberOfPokemonToShow, hasLoadMoreButton = false }: PokemonListProps) => {
    const loadMorePokemons = $(() => {
      if (numberOfPokemonToShow.value >= MAX_NUMBER_OF_POKEMONS) return
      numberOfPokemonToShow.value += 3
    })

    return (
      <div class="mb-12">
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 place-items-center mb-4">
          {[...Array(numberOfPokemonToShow.value)].map((_, i) => (
            <PokemonCard key={i} id={i + 1} />
          ))}
        </div>
        {!hasLoadMoreButton ? null : (
          <button
            disabled={numberOfPokemonToShow.value >= MAX_NUMBER_OF_POKEMONS}
            class="btn flex mx-auto justify-center disabled:cursor-not-allowed disabled:bg-gray-400 disabled:text-gray-700"
            onClick$={loadMorePokemons}
          >
            Dame más Pokemons
          </button>
        )}
      </div>
    )
  }
)
