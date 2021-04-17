<template>
  <div class="w-full">
    <div class="w-full flex justify-center">
      <h1 class="text-xl font-semibold text-purple-900 pt-7">About Us</h1>
    </div>
  </div>

  <div class="text-md w-full flex items-center justfiy-center">
    <div class="w-2/6 shadow-xl ml-40 mt-5">
      <img :src="img" class="rounded-md" />
    </div>

    <div class="pl-10">
      <base-card class="p-4 text-lg text-purple-800">
        <p>Name : {{ name }}</p>
        <p>Student id : {{ id }}</p>
        <p>Nickname : {{ nickname }}</p>
        <p>Instagram : {{ instagram }}</p>
        <p>Facebook : {{ facebook }}</p>
        <p>Email : {{ email }}</p>
        <p>Phone : {{ phone }}</p>
      </base-card>
    </div>
    
  </div>
</template>

<script>
import BaseCard from "../components/BaseCard.vue";
export default {
  components: { BaseCard },
  data() {
    return {
      name: "Pacharaporn Kamsanong",
      nickname: "Muk",
      id: "62130500061",
      instagram: "mukpch",
      facebook: "Pacharaporn Kamsanong",
      email: "pacharaporn.ksn@gmail.com",
      phone: "0807764826",
      img: require("../assets/aboutus.jpg"),
    }
  }
}
</script>

