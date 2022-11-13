<template>
  <ul>
    <li>AMG artist ID: {{ state.amgId }}</li>
    <li><a :href="state.link" target="_blank">Artist Link</a> →</li>
  </ul>
</template>

<script setup lang="ts">
import { GetResults } from '@/typings/api/artists/get_results'

const props = defineProps<{
  id: number
}>()

const state = reactive({
  amgId: '',
  link: '',
})


const { data } = await useFetch<GetResults>(`/api/artists/${encodeURIComponent(props.id)}`)

if (data.value != null) {
  state.amgId = data.value.results[0].amgArtistId
  state.link = data.value.results[0].artistLinkUrl
}
</script>
