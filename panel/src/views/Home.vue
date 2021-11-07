<template>

 <div id="" class="flex flex-auto">
    
    <VsSubmenu/>
    
    <div class="flex-auto bg-white border rounded-tl-xl rounded-bl-lg shadow-xl p-4">
      <!-- main -->
      <div class="w-full shadow stats">
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Postagens</div> 
          <div class="stat-value">310M</div> 
          <div class="stat-desc">Jan 1st - Feb 1st</div>
        </div> 
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Usuarios Novos</div> 
          <div class="stat-value text-success">4,200</div> 
          <div class="stat-desc text-success">↗︎ 400 (22%)</div>
        </div> 
        <div class="stat place-items-center place-content-center">
          <div class="stat-title">Categorias</div> 
          <div class="stat-value text-error">1,200</div> 
          <div class="stat-desc text-error">↘︎ 90 (14%)</div>
        </div>
      </div>

    </div>
   
 </div>
  
</template>
<script>
// import TodoCard from '@/components/Todos/TodoCard';
import VsSubmenu from '@/components/Sidebar/VsSubmenu';
// import VSMain from '@/components/Main/VSMain';

export default {
  name: 'Home',
  
  components: {
    VsSubmenu
  }
 
};
</script>
