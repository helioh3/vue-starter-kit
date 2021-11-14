<template>
  <div class="flex h-screen bg-gray-100 p-2">
    <!-- sidebar -->
    <Sidebar />    

    <!-- main -->
    <div class="main w-full">
      <Menu />

      <div class="container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/modules/Partials/Sidebar';
import Menu from "@/modules/Partials/Menu";

export default {
  name: "Default",

  components: {
    Menu, Sidebar
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
