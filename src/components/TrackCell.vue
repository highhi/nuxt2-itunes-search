<template>
  <div class="flex-1">
    <p class="text-[1.6rem] mb-[4px]">{{ trackName }}</p>
    <p class="text-[1.2rem]">
      <button type="button" @click="lookup = true">
        <span class="align-middle">{{ artistName }}</span>
        <IconSearch class="inline ml-[4px]" width="10px" height="10px" />
      </button>
    </p>
    <p class="text-[1.2rem]">{{ collectionName }}</p>
    <Suspense>
      <template #default>
        <NuxtErrorBoundary>
          <template #default>
            <LazyLookupArtist v-if="lookup && artistId" class="mt-[8px]" :id="artistId" />
          </template>
          <template #error="{ error }">
            <p class="mt-[8px]">{{ error }}</p>
          </template>
        </NuxtErrorBoundary>
      </template>
      <template #fallback>
        <p class="mt-[8px]">loading...</p>
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  artistId?: number;
  trackName?: string;
  artistName?: string;
  collectionName?: string;
}>()

const lookup = ref(false)

</script>
