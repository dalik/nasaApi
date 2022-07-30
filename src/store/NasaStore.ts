import { ref } from "vue";
import { Asteroid, fetchAsteroids } from "../services/asteroids";

const asteroids = ref<Asteroid[]>([]);

export default function useNasaStore() {
  //this file is easily extendable for other need

  async function getAsteroids(date: string) {
    const {
      data: { near_earth_objects = [] } = {},
    } = await fetchAsteroids(date);
    asteroids.value = Object.values(near_earth_objects).flatMap((item) =>item);
  }

  return {
    asteroids,
    getAsteroids,
  };
}
