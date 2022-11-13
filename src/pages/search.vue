<template>
  <div class="p-[20px] max-w-[980px] m-auto">
    <h1 class="font-bold text-[3rem] text-center mb-[14px]">iTunes Search</h1>
    <SearchForm @search="search" :word="searchWord" />
    <TrackList :tracks="searchResults.results" />
  </div>
</template>

<script setup lang="ts">
import { FetchError } from 'ohmyfetch';
import { ItunesSearchResults } from '../typings/api/itunes/post_results';

const { searchWord, clearSearchWord } = useSearchWord()

const searchResults = ref<ItunesSearchResults>({
  resultCount: 0,
  results: []
})

onUnmounted(() => clearSearchWord())

const { data, error, refresh } = await useAsyncData<ItunesSearchResults, FetchError>('search', () => $fetch('/api/itunes', {
  method: 'post',
  body: { term: searchWord.value.trim() }
}), {
  immediate: false
})

watch(data, (next) => {
  if (next != null) {
    searchResults.value.resultCount = next.resultCount
    searchResults.value.results = [...next.results]
  }
})

watch(error, (next) => {
  if (next != null) {
    throw createError({ statusCode: next.status, statusMessage: next.message }) 
  }
})

if (searchWord.value !=='') {
  await refresh()
}

const search = (word: string) => {
  if (word === '' || searchWord.value === word) return;
  searchWord.value = word
  refresh()
}
</script>
