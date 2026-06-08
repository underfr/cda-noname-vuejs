<template>
  <div
    class="card w-96 bg-base-200 shadow-xl mx-auto my-8 border border-base-300"
  >
    <figure class="px-10 pt-10">
      <div class="avatar">
        <div
          class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2"
        >
          <img v-bind:src="usrImg" alt="User Profile" />
        </div>
      </div>
    </figure>

    <div class="card-body items-center text-center p-6">
      <h2 class="card-title text-2xl font-black text-base-content mb-2">
        {{ usrName }}
      </h2>

      <div class="form-control w-full max-w-xs mb-6">
        <label class="label justify-center">
          <span
            class="label-text-alt uppercase tracking-wide font-semibold opacity-70"
            >Edit Nickname</span
          >
        </label>
        <input
          type="text"
          v-bind:value="usrName"
          class="input input-bordered input-primary w-full max-w-xs text-center font-medium shadow-sm focus:scale-105 transition-all"
        />
      </div>

      <div
        class="stats shadow bg-base-100 w-full grid-cols-2 compact border border-base-300"
      >
        <div class="stat place-items-center">
          <div class="stat-title text-xs font-bold uppercase">Age</div>
          <div class="stat-value text-xl text-primary">{{ usrAge }} ans</div>
          <div class="stat-desc text-[10px] opacity-80">
            In 10 years: <span class="font-bold">{{ agePlusTen() }}</span>
          </div>
        </div>

        <div class="stat place-items-center">
          <div class="stat-title text-xs font-bold uppercase">Lucky NB</div>
          <div class="stat-value text-xl text-secondary">{{ usrNbr }}</div>
          <div class="stat-desc text-[10px] opacity-80">Randomized</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const usrImg = ref("/public/image.png");
const usrName = ref("Dr.Mario");
const usrAge = 45;
const usrNbr = Math.floor(Math.random() * 100);

function agePlusTen() {
  return usrAge + 10;
}
</script>

<style lang="css" scoped></style>
