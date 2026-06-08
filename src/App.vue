<script setup>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col bg-base-200 text-base-content">
        <AppHeader />
    <!-- Conteneur principal du contenu, centré et responsive -->
    <main class="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
      <!-- Ici on aura la router view -->
      <router-view></router-view>
      <!-- <RouterView></RouterView> -->
    </main>
    <!-- Footer en bas de la page -->
    <AppFooter />
  </div>
</template>