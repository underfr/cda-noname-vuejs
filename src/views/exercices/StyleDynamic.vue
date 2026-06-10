<template>
    <div class="p-6 max-w-xl mx-auto space-y-6 bg-base-200 rounded-2xl shadow-sm">
      
      <div class="grid grid-cols-2 gap-4">
        <div class="col-span-1">
          <div
            class="card bg-base-100 shadow-md border border-base-300 cursor-pointer transition-all duration-300 transform hover:scale-105"
            @click="selectionCard(3)"
            v-bind:class="{ class1: selectCard3 }"
          >
            <div class="card-body p-6 items-center text-center">
              <h5 class="card-title text-lg font-bold">Carte 3</h5>
            </div>
          </div>
        </div>
  
        <div class="col-span-1">
          <div
            class="card bg-base-100 shadow-md border border-base-300 cursor-pointer transition-all duration-300 transform hover:scale-105"
            @click="selectionCard(4)"
            :class="{ class2: selectCard4 }"
          >
            <div class="card-body p-6 items-center text-center">
              <h5 class="card-title text-lg font-bold">Carte 4</h5>
            </div>
          </div>
        </div>
      </div>
  
      <hr class="border-base-300" />
  
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text font-semibold">Entre "hello" ou "world" :</span>
        </label>
        <input 
          type="text" 
          v-model="inputWorld" 
          @keyup="checkKeyUp"
          placeholder="Tapez quelque chose..." 
          class="input input-bordered input-primary w-full"
        >
        <p 
          class="mt-2 text-sm font-medium transition-all" 
          :class="{ maClasseWorld: isInputWorld, maClasseHello: isInputHello }"
        >
          Texte d'état : Hello World
        </p>
      </div>
  
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text font-semibold">Choisir une couleur d'arrière-plan (ex: red, #00ff00, violet) :</span>
        </label>
        <input 
          type="text" 
          v-model="inputColor"
          placeholder="Entrez une couleur..." 
          class="input input-bordered input-secondary w-full"
        >
        <p 
          class="mt-2 p-3 rounded-lg text-center font-bold shadow-inner border border-base-300 transition-all duration-300" 
          :style="{ backgroundColor: inputColor }"
        >
          Aperçu de la couleur
        </p>
      </div>
  
      <hr class="border-base-300" />
  
      <div class="flex flex-col items-center gap-4">
        <button class="btn btn-primary btn-block sm:w-auto" @click="showTitle()">
          Show first title
        </button>
        
        <h1 
          class="text-2xl font-black tracking-wide uppercase text-neutral-content transition-all" 
          :class="{ classTitle: selectTitle }"
        >
          Main title
        </h1>
      </div>
  
    </div>
  </template>
  
  <script setup lang='js'>
  import { ref } from 'vue'
  
  const selectCard1 = ref(false);
  const selectCard2 = ref(false);
  const selectCard3 = ref(false);
  const selectCard4 = ref(false);
  const selectTitle = ref(false);
  const inputWorld = ref("");
  const isInputWorld = ref(false);
  const isInputHello = ref(false);
  const inputColor = ref("");
  
  const checkKeyUp = ()=> {
      if (inputWorld.value === "world"){
          isInputWorld.value = true
      } else {
          isInputWorld.value = false
      }
      if (inputWorld.value === "hello"){
          isInputHello.value = true
      } else {
          isInputHello.value = false
      }
  }
  
  function selectionCard(uneCard) {
      if (uneCard === 1) {
          selectCard1.value = !selectCard1.value;
      }
      if (uneCard === 2) {
          selectCard2.value = !selectCard2.value;
      }
      if (uneCard === 3) {
      selectCard3.value = !selectCard3.value;
    }
    if (uneCard === 4) {
      selectCard4.value = !selectCard4.value;
    }
  }
  
  function showTitle(){
      selectTitle.value = !selectTitle.value;
  }
  </script>
  
  <style scoped lang="css">
  .class1 {
    background-color: mediumslateblue !important;
    color: white;
    font-style: italic;
  }
  
  .class2 {
    background-color: chartreuse !important;
    color: black;
    font-size: large;
  }
  
  .classTitle {
      display: none;
  }
  
  .maClasseWorld {
      color: #3b82f6;
      font-weight: bold;
  }
  
  .maClasseHello {
      color: #eab308;
      font-weight: bold;
  }
  </style>