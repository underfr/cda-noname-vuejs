<template>
    <p>Le livre de {{ random() }}</p>
</template>

<script setup>

function random(){
    const numb = Math.random();
    return numb > 0.5 ? "Bobba Fet" : "la jungle"
}

</script>

<style lang="css" scoped>

</style>