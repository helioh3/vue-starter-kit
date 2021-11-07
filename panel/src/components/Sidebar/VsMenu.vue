<template>
  <div class="flex flex-col justify-between items-center w-16 justify-items-center bg-gray-300">
      <div class="flex flex-col w-full items-center pt-5">
        <a href="#">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-9 w-9 text-blue"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path></svg>
        </a>
        <RouterLink 
          class="relative w-full h-14 flex justify-center items-center mt-4"
          :to="{name: 'index'}"
          :class="{
            'bg-gray-100 ': $route.name === 'index',
          }"

        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <div class="absolute top-0 right-0 mr-3 mt-2 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center">5</div>
        </RouterLink>
        
        <RouterLink 
          class="relative w-full h-14 flex justify-center items-center "
          :to="{name: 'post'}"
          :class="{
            'bg-gray-100 ': $route.name === 'post',
          }"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <!-- <div class="absolute top-0 right-0 mr-3 mt-2 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center">5</div> -->
        </RouterLink>
        
        <!-- <a href="#" class="relative w-full h-14 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
          </svg>
          <div class="absolute top-0 right-0 mr-3 mt-2 bg-red-500 w-4 h-4 text-xs text-white rounded-full text-center">5</div>
        </a> -->
        
      </div>

      <div class="flex flex-col space-y-4 pb-5">
        <a href="#">
          <div class="rounded-full bg-gray-400 w-9 h-9"></div>
        </a>
        <a href="#">
          <div class="rounded-full bg-gray-400 w-9 h-9"></div>
        </a>
      </div>
    </div>
</template>
<script>

export default {
  
  data() {
    return {};
  },
  components: {
  }

}

</script>
