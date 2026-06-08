<template>
    <div class="flex items-center justify-center flex-col gap-2">
        <h2 class="text-primary text-2xl">Count by 1</h2>
        <div class="flex items-center justify-center gap-2">
          <button @click="minus" class="btn btn-error">-</button>
          <p>{{ count }}</p>
          <button @click="add" class="btn btn-primary">+</button>
        </div>
        <h2 class="text-primary text-2xl">Count custom</h2>
        <div class="flex items-center justify-center gap-2">
          <button @click="minusCustom(33)" class="btn btn-error">-</button>
          <p>{{ count }}</p>
          <button @click="addCustom(67)" class="btn btn-primary">+</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const count = ref(67);
const add = () => {
    return count.value++;
};
const minus = () => {
    return count.value--;
};

const addCustom = (add) => {
    return count.value += add;
}
const minusCustom = (minus) => {
    return count.value -= minus;
}
</script>

<style lang="css" scoped></style>
