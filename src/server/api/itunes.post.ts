import { ItunesMedia, ItunesSearchOptions, searchItunes } from 'node-itunes-search'
import { PostBody } from '@/typings/api/itunes/post_body'
import { ItunesSearchResults } from '@/typings/api/itunes/post_results'

export default defineEventHandler<ItunesSearchResults>(async (event) => {
  const body = await useBody<PostBody>(event)
  const options = new ItunesSearchOptions({
    term: encodeURIComponent(body.term.trim()),
    country: 'jp',
    lang: 'ja_jp',
    media: ItunesMedia['Music'],
  })

  const res: string = await $fetch(`https://itunes.apple.com/search?${options.toURI()}`)
  return JSON.parse(res)
})