<script setup>
    import { reactive, ref } from 'vue';
    const unLivre = ref("Les mémoires de Steven Seagal")
    const isOnline = ref(true)
    const unNombre = ref(8888)
    const unTableau = ref(["sport","lecture","code"])
    const unObjet = reactive({
        name: "Jean",
        tel: "0612345678"
    })
    const html = "<h1>Du HTML</h1>"

    function fonctionTest() {
        return `Hello world`
    }
</script>

<template>
    <div>
        <h2>Exercice Text Interpolation</h2>

        <p>unLivre: {{ unLivre }}</p>
        <p>Actif: {{ isOnline }}</p>
        <p>unNombre: {{ unNombre }}</p>
        <p>unTableau: {{ unTableau }}</p>
        <p>Premier hobby: {{ unTableau[0] }}</p>
        <p>unObjet: {{ unObjet }}</p>
        <p>unObjet.name: {{ unObjet.name }}</p>
        <p>unObjet.tel: {{ unObjet.tel }}</p>
        <p>fonctionTest: {{ fonctionTest() }}</p>
        <p>Une ternaire pour la route {{ unObjet ? unObjet.name : "null" }}</p>
        <p>On affiche du html ?: {{ html }}</p>
    </div>
</template>

<style scoped lang="css"></style>