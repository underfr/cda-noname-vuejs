<template>
  <div
    class="max-w-md mx-auto p-6 bg-base-200 rounded-xl shadow-xl space-y-6 my-10"
  >
    <h2 class="text-xl font-bold text-center text-primary mb-4">
      Formulaire Événements Vue
    </h2>

    <div class="form-control w-full">
      <label class="label" for="keyup-all">
        <span class="label-text font-semibold">@keyup (En temps réel)</span>
      </label>
      <input
        id="keyup-all"
        type="text"
        @keyup="keyupAll"
        name="keyup"
        placeholder="Tapez quelque chose..."
        class="input input-bordered input-primary w-full"
      />
      <div
        class="mt-2 p-3 bg-base-100 rounded-lg border border-base-300 min-h-12"
      >
        <span class="text-xs text-base-content/60 block mb-1"
          >Valeur en direct :</span
        >
        <p class="text-sm font-medium text-secondary break-all">
          {{ keyup || "..." }}
        </p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="form-control w-full">
      <label class="label" for="keyupEsc">
        <span class="label-text font-semibold">@keyup with escape</span>
      </label>
      <input
        id="keyupEsc"
        type="text"
        @keyup.escape="keyupEsc"
        name="keyupEsc"
        placeholder="Tapez puis appuyez sur Échap"
        class="input input-bordered input-accent w-full"
      />
      <div
        class="mt-2 p-3 bg-base-100 rounded-lg border border-base-300 min-h-12"
      >
        <span class="text-xs text-base-content/60 block mb-1"
          >Validé via Échap :</span
        >
        <p class="text-sm font-medium text-accent break-all">
          {{ keyupEscValue || "..." }}
        </p>
      </div>
    </div>

    <div class="divider"></div>

    <div class="form-control w-full">
      <label class="label">
        <span class="label-text font-semibold">@click alert</span>
      </label>
      <button
        class="btn btn-info btn-block shadow-md text-white"
        type="button"
        @click="handleAlert()"
      >
        Déclencher le Test
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const keyup = ref("");
const keyupEscValue = ref("");

const keyupAll = (e) => {
  keyup.value = e.target.value;
};
const keyupEsc = (e) => {
  keyupEscValue.value = e.target.value;
};

function handleAlert() {
  alert("test");
}
</script>

<style lang="css" scoped></style>
