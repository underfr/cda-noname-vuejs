<template>
    <footer class="bg-base-200 text-base-content mt-auto">
    <!-- Contenu Principal -->
    <div class="footer p-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      
      <!-- Colonne 1: Description du cours -->
      <aside class="flex flex-col gap-2">
        <span class="text-2xl font-bold tracking-wide">
          <span class="text-primary">Vue</span>Edu
        </span>
        <p class="max-w-xs text-sm opacity-80 leading-relaxed">
          Plateforme d'exercices pratiques et de cours interactifs pour maîtriser l'écosystème Vue.js 3.
        </p>
      </aside>

      <!-- Colonne 2: Liens d'apprentissage -->
      <nav>
        <h6 class="footer-title text-primary opacity-100 font-bold">Apprendre</h6>
        <a class="link link-hover opacity-80 hover:text-primary transition-colors">Documentation Vue</a>
        <a class="link link-hover opacity-80 hover:text-primary transition-colors">Tutoriels vidéo</a>
        <a class="link link-hover opacity-80 hover:text-primary transition-colors">Aide / Forum</a>
      </nav>

      <!-- Colonne 3: Ressources TP / Exercices -->
      <nav>
        <h6 class="footer-title text-primary opacity-100 font-bold">Ressources</h6>
        <a class="link link-hover opacity-80 hover:text-primary transition-colors">Dépôt GitHub du cours</a>
        <a class="link link-hover opacity-80 hover:text-primary transition-colors">Cheat Sheets</a>
        <a class="link link-hover opacity-80 hover:text-primary transition-colors">Quiz de validation</a>
      </nav>

      <!-- Colonne 4: Zone d'aide ou feedback rapide -->
      <div>
        <h6 class="footer-title text-primary opacity-100 font-bold">Un problème ?</h6>
        <p class="text-sm opacity-80 mb-2">Signale un bug sur l'exercice en un clic.</p>
        <button class="btn btn-outline btn-error btn-sm w-full sm:w-auto">
          ⚠️ Signaler un bug
        </button>
      </div>
    </div>

    <!-- Séparateur -->
    <div class="border-t border-base-300"></div>

    <!-- Bas du Footer -->
    <div class="footer footer-center p-4 max-w-7xl mx-auto opacity-80 text-sm">
      <aside>
        <p>© 2026 VueEdu - Projet d'exercice Vue.js & DaisyUI.</p>
      </aside>
    </div>
  </footer>
</template>

<script setup lang="js">

</script>

<style scoped lang="css">
</style>