<template>
  <div class="flex flex-row h-screen bg-gray-100">
    <VsMenu/>

    <RouterView/>
  </div>
</template>

<script>

import VsMenu from '@/modules/Sidebar/VsMenu';

export default {
  name: "Default",

  components: {
    VsMenu
  },

  data() {
    return {};
  },

  methods: {},
};
</script>
