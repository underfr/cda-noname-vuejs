<template>
  <div
    class="card w-full max-w-sm bg-base-100 shadow-xl border border-base-200"
  >
    <div class="card-body gap-4">
      <h2 class="card-title text-xl font-bold justify-center mb-2">
        Ajouter un nouvel ami
      </h2>

      <div class="form-control w-full">
        <label class="label font-medium" for="name">
          <span class="label-text text-base">Nom</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Jean michel"
          name="name"
          v-model="name"
          class="input input-bordered w-full focus:input-primary text-base"
        />
      </div>

      <div class="form-control w-full">
        <label class="label font-medium" for="tel">
          <span class="label-text text-base">Téléphone</span>
        </label>
        <input
          type="text"
          id="tel"
          placeholder="0600000000"
          name="tel"
          v-model="tel"
          class="input input-bordered w-full focus:input-primary text-base"
        />
      </div>

      <div class="form-control w-full">
        <label class="label font-medium" for="email">
          <span class="label-text text-base">Email</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="jeanmichel.trogneux@mail.com"
          name="email"
          v-model="email"
          class="input input-bordered w-full focus:input-primary text-base"
        />
      </div>

      <div class="card-actions w-full mt-4">
        <button class="btn btn-primary w-full text-base" @click="submitForm">
          Ajouter ami
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const name = ref("");
const tel = ref("");
const email = ref("");

const emit = defineEmits(["addFriend"]);

function submitForm() {
  if (name.value.trim() === "") return;

  emit("addFriend", {
    name: name.value,
    phone: tel.value,
    email: email.value,
  });

  name.value = "";
  tel.value = "";
  email.value = "";
}
</script>

<style lang="css" scoped></style>
