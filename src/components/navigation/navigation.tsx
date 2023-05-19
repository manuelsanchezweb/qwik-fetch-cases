import { component$ } from '@builder.io/qwik'
import { Link } from '@builder.io/qwik-city'

export const Navigation = component$(() => {
  return (
    <nav class="border w-full flex justify-center gap-4 p-8">
      <Link class="btn" href="/infinite-scroll/">
        Fetch desde el ser/cliente con Infinite Scroll
      </Link>
      <Link class="btn" href="/skeleton/">
        Fetch desde el cliente con Skeleton
      </Link>
    </nav>
  )
})
