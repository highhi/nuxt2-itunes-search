<template>
  <div v-for="track in tracks" :kye="createId(track)" class="track">
    <div class="flex">
      <div class="mr-[14px]">
        <img :src="track.artworkUrl60" width="60" height="60" :alt="track.trackName">
      </div>
      <div class="flex-1">
        <p class="text-[1.6rem] mb-[4px]">{{ track.trackName }}</p>
        <p class="text-[1.2rem]">{{ track.artistName }}</p>
        <p class="text-[1.2rem]">{{ track.collectionName }}</p>
      </div>
      <div>
        <audio controls crossorigin="anonymous" preload="none" :src="track.previewUrl"></audio>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ItunesProperties } from 'node-itunes-search';
import { ItunesSearchResults } from '../typings/api/itunes/post_results';

defineProps<{
  tracks: ItunesSearchResults['results']
}>()

const createId = ({ artistId, trackId }: Pick<ItunesProperties, 'artistId' | 'trackId'> ) => {
  return `${artistId}&${trackId}`
}
</script>

<style scoped>
.track {
  border-bottom: 1px solid #ccc;
  padding: 14px 0;
}
</style>
