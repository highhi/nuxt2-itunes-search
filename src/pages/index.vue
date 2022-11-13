<template>
  <div class="h-screen">
    <div class="flex w-full h-full items-center box-border p-[14px]">
      <div class="flex-1">
        <h1 class="text-[4rem] font-bold text-center mb-[28px]">iTunes Search</h1>
        <SearchForm @search="search" class="max-w-[500px] m-[auto]" />
        <TrackList :tracks="searchResults.results" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ItunesSearchResults } from '../typings/api/itunes/post_results';

onMounted(() => {
  $fetch('/api/health').then((res) => {
    console.log(res)
  })
})

const { setSearchWord } = useSearchWord()
const router = useRouter()

const searchResults = ref<ItunesSearchResults>({
  resultCount: 0,
  results: []
})

const search = (word: string) => {
  setSearchWord(word)
  router.push('/search')
}
</script>
