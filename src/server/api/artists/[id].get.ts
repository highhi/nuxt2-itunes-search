import { GetResults } from '@/typings/api/artists/get_results'

export default defineEventHandler<GetResults>(async (event) => {
  const id = event.context.params.id
  const res: string = await $fetch(`https://itunes.apple.com/lookup?id=${encodeURIComponent(id)}`)
  return JSON.parse(res)
})