import { component$ } from '@builder.io/qwik'
import { type DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <div class="flex flex-col justify-center items-center mt-12">
      <h1 class="text-xl md:text-5xl p-5">
        Fetch con Qwik desde el cliente o el servidor
      </h1>
      <p>
        En este repositorio vamos a ver algunas formas interesantes de mostrar
        la información cuando queremos hacer fetch con Qwik.
      </p>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
}
