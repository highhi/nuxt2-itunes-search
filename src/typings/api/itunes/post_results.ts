import { ItunesProperties, ItunesResult } from 'node-itunes-search'
import { Mutable } from '@/typings/mutable'

export type ItunesSearchResults = {
  resultCount: Mutable<ItunesResult['resultCount']>
  results: Mutable<ItunesProperties>[],
}
