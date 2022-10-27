<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import useNasaStore from "../store/NasaStore";
import Loader from "./Loader.vue";
import Asteroid from "./Asteroid.vue";
import { currentDate } from "../functions/currentDate";

const loading = ref<number>(0);
const date = ref<string>(currentDate())

const { asteroids, getAsteroids } = useNasaStore();

const fetchAsteroids = async (date: string) => {
  try {
    loading.value += 1;
    await getAsteroids(date);
  } catch (error) {
    console.warn(error);
  } finally {
    loading.value -= 1;
  }
}

onBeforeMount(async () => {
  fetchAsteroids(currentDate())
});
</script>

<template>
  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-6">
    <div>
      <p class="text-3xl font-bold">
        Asteroids near to earth on 
        <input
          v-model="date"
          type="date"
          class="text-red-400"
          @change="(e) => fetchAsteroids((e.target as HTMLInputElement).value)"
        >
      </p>
      <p class="text-gray-400 mt-2 mb-5">
        {{ asteroids.length }} asteroids
      </p>
    </div>

    <div class="inline-block min-w-full shadow md:shadow-xl md:pl-4 p-6 rounded-lg">
      <div v-if="asteroids.length">
        <Asteroid
          v-for="item in asteroids"
          :key="item.id"
          :name="item.name"
        />
      </div>

      <div v-else>
        <p>No asteroids</p>
      </div>
    </div>
  </div>

  <Loader
    v-if="loading"
    message="Loading"
  />
</template>
