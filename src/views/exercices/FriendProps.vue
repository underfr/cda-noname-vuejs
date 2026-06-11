<template>
  <div class="flex flex-col items-center gap-6 p-4">
    <h1 class="text-primary text-2xl">Exo Props</h1>
    <div v-for="friend in lesAmis" :key="friend.id" class="w-full max-w-sm">
      <OneFriend 
      v-bind="friend"
      @eventPremiumUpdate="togglePremiumStatus"
      @deleteFriend="removeFriend"
      />
    </div>
  </div>
</template>

<script setup>
import OneFriend from "../../components/OneFriend.vue";
import { ref } from "vue";

const lesAmis = ref([
  {
    id: "lasticot",
    name: "COCO L ASTICOT",
    phone: "01234 5678 991",
    email: "coco@lasticot.com",
    premium: false,
  },
  {
    id: "lasticot2",
    name: "COCO L ASTICOT",
    phone: "01234 5678 991",
    email: "coco@lasticot.com",
    premium: true,
  },
  {
    id: "kimonoSurUnFrigo",
    name: "Steven Seagal",
    phone: "+338765477",
    email: "steven@seagal.com",
    premium: true,
  },
  {
    id: "yoyoyo",
    name: "JAROD",
    phone: "+338765477",
    email: "jAROD@seagal.com",
    premium: true,
  },
  {
    id: "yoyoyo",
    name: "JAROD",
    phone: "+338765477",
    email: "jAROD@seagal.com",
    premium: true,
  },
  {
    id: "ok",
    name: "JAROD",
    phone: "+338765477",
    email: "jAROD@seagal.com",
    premium: true,
  },
  {
    id: "GUS",
    name: "GussDX",
    phone: "+338765477",
    email: "jAROD@seagal.com",
    premium: true,
  },
]);

function togglePremiumStatus(id){
  const friend = lesAmis.value.find(f => f.id === id)
  if (friend){
    friend.premium = !friend.premium
  }
}

function removeFriend(id){
  lesAmis.value = lesAmis.value.filter(friend=>friend.id !== id)
}
</script>

<style lang="css" scoped></style>
