<template>
<header class="navbar bg-base-100 shadow-lg px-4 sm:px-6">
    <!-- Partie Gauche : Logo & Menu Mobile -->
    <div class="navbar-start">
      <!-- Menu Burger (Mobile) -->
      <div class="dropdown">
        <button tabindex="0" role="button" class="btn btn-ghost lg:hidden" aria-label="Menu">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </button>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Tableau de bord</a></li>
          <li>
            <a>Modules</a>
            <ul class="p-2">
              <li><a>Bases de Vue</a></li>
              <li><a>Composants</a></li>
              <li><a>Routing & State</a></li>
            </ul>
          </li>
          <li><a>Exercices</a></li>
          <li><RouterLink to="/contact">Contact</RouterLink></li>
        </ul>
      </div>
      
      <!-- Logo Apprentissage -->
      <a class="btn btn-ghost text-xl font-bold tracking-wide">
        <span class="text-primary">Vue</span>Edu
      </a>
    </div>

    <!-- Partie Centrale : Navigation (Desktop) -->
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li><a class="rounded-lg">Tableau de bord</a></li>
        <!-- Menu Déroulant Modules -->
        <li>
          <details>
            <summary class="rounded-lg">Modules</summary>
            <ul class="p-2 bg-base-100 rounded-t-none shadow-md z-1 w-48">
              <li><RouterLink to="/methods">1. Les Methods</RouterLink></li>
              <li><RouterLink to="/binds">2. V-Bind</RouterLink></li>
              <li><RouterLink to="/count">3. Count</RouterLink></li>
            </ul>
          </details>
        </li>
        <li><a class="rounded-lg">Exercices</a></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
      </ul>
    </div>

    <!-- Partie Droite : Score & Étudiant -->
    <div class="navbar-end gap-4">
      <!-- Badge de progression / Score factice -->
      <div class="badge badge-accent badge-md gap-2 font-semibold hidden sm:inline-flex">
        🎯 1250 XP
      </div>

      <!-- Menu Profil Étudiant -->
      <div class="dropdown dropdown-end">
        <button tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img alt="Avatar de l'étudiant" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </button>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-1 p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Mon Profil
              <span class="badge badge-ghost badge-sm">Élève</span>
            </a>
          </li>
          <li><a>Mes Certificats</a></li>
          <hr class="border-base-300 my-1" />
          <li><a class="text-error">Se déconnecter</a></li>
        </ul>
      </div>
    </div>
  </header>
</template>


<script setup lang="js">

</script>

<style scoped lang="css">
</style>