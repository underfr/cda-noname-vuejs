<template>
    <div class="container mx-auto p-6 space-y-6">
  
      <!-- Carte météo -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">🌤️ Météo du jour Toulouse</h2>
          <div class="stats shadow">
            <div class="stat">
              <div class="stat-title">Température actuelle</div>
              <div class="stat-value text-primary">
                {{ weather?.current_condition.tmp }}°C
              </div>
            </div>
  
            <div class="stat">
              <div class="stat-title">Maximum</div>
              <div class="stat-value text-error">
                {{ weather?.fcst_day_0.tmax }}°C
              </div>
            </div>
  
            <div class="stat">
              <div class="stat-title">Minimum</div>
              <div class="stat-value text-info">
                {{ weather?.fcst_day_0.tmin }}°C
              </div>
            </div>
          </div>
  
          <div class="mt-4">
            <div class="badge badge-primary badge-lg">
              {{ weather?.current_condition.condition }}

            </div>
          </div>
        </div>
      </div>
  
      <!-- Liste Pokémon -->
      <div class="card bg-base-200 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">🎮 Pokémon</h2>
  
          <div class="flex flex-wrap gap-2">
            <div
              v-for="poke in pokemons"
              :key="poke.name"
              class="badge badge-secondary badge-lg"
            >
              {{ poke.name }}
            </div>
          </div>
        </div>
      </div>
  
    </div>
  </template>

<script setup>
import { onMounted, ref } from 'vue';

const pokemons = ref([])
const weather = ref()

async function getPoke() {
    const url = "https://pokeapi.co/api/v2/pokemon"
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json()
        pokemons.value = result.results
    } catch (error) {
        console.error(error)
    }
}

async function getWeather(){
    const url = "https://prevision-meteo.ch/services/json/toulouse"
    try {
        const response = await fetch(url)
        if(!response.ok){
            throw new Error(`Response status: ${response.status}`)
        }
        const result = await response.json()
        console.log(result)
        weather.value = result
        console.log(weather)
    } catch (error) {
        console.error(error)
    }
}

onMounted(()=>{
    getPoke()
    getWeather()
})

</script>

<style lang="css" scoped>

</style>