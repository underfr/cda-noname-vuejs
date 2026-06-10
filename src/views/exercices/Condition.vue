<template>
  <div class="flex items-center justify-center min-h-[50vh] p-4">
    <div
      class="card w-full max-w-md bg-base-200 shadow-xl border border-base-300"
    >
      <div class="card-body gap-4">
        <h1
          class="card-title text-3xl font-bold text-primary justify-center mb-2"
        >
          🎬 WatchList
        </h1>

        <div class="join w-full">
          <input
            type="text"
            placeholder="Nom du film"
            v-model="movie"
            class="input input-bordered input-primary join-item w-full focus:outline-none"
            :class="{ 'input-error': errorMessage }"
            @input="errorMessage = ''"
            required
          />
          <button class="btn btn-primary join-item" @click="addMovie()">
            Ajouter
          </button>
        </div>
        <p
          v-if="errorMessage"
          class="text-error text-sm font-medium mt-1 text-center"
        >
          {{ errorMessage }}
        </p>
        <div class="divider my-1"></div>

        <div class="text-center min-h-[40px] flex items-center justify-center">
          <p v-if="movies.length === 0" class="text-base-content/60 italic">
            Pas encore de film
          </p>
          <p
            v-else-if="movies.length === 1"
            class="text-lg font-medium text-base-content"
          >
            Votre film:
            <span
              class="badge badge-secondary badge-lg ml-1 font-semibold hover:bg-base-300/80"
              @click="movies.pop(item)"
              >{{ movies[0] }}</span
            >
          </p>
          <div v-else class="w-full text-left">
            <p class="text-lg font-medium text-base-content mb-3 text-center">
              Vos films:
            </p>

            <ul
              class="flex flex-col gap-2 w-full max-h-60 overflow-y-auto px-1 justify-center items-center"
            >
              <li
                v-for="item in movies"
                :key="item"
                class="flex items-center justify-between badge badge-secondary hover:bg-base-300/80 p-3 rounded-xl transition-all cursor-pointer group"
                @click="movies.pop(item)"
              >
                <span class="font-medium text-base-content">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const movie = ref("");
const movies = ref([]);
const errorMessage = ref("");

const addMovie = () => {
  if (!movie.value || movie.value.trim() === "") {
    errorMessage.value = "Veuillez entrer le nom d'un film.";
    return;
  } else {
    movies.value.push(movie.value);
    movie.value = "";
  }
};
</script>

<style lang="css" scoped></style>
