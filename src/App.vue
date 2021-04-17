<template>
  <div class="bg-purple-200 flex justify-start w-full mt-5 text-purple-900 text-lg font-semibold">
    
    <hover-click>
      <router-link to="/" class="p-8">Home</router-link>
    </hover-click>

    <hover-click>
      <router-link to="/timetable" class="p-8">Timetable</router-link>
    </hover-click>

    <hover-click>
      <router-link to="/aboutUs" class="p-8">About Us</router-link>
    </hover-click>

  </div>
  <router-view />
</template>

