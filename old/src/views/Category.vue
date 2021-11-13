<template>
 <div id="" class="flex flex-auto">
    <VsSubmenu title="Categorias">
      <li>
        <RouterLink :to="{name: 'category'}" :class="{'bg-gray-100 ': $route.name === 'category'}"> Categorias </RouterLink>
      </li>
      <li>
        <!-- <RouterLink :to="{name: 'post'}" :class="{'bg-gray-100 ': $route.name === link}"> Secretarias </RouterLink> -->
      </li>
    </VsSubmenu>
    
    <div class="flex-auto bg-white border rounded-tl-xl rounded-bl-lg shadow-xl p-4">
      <h1 class="font-semibold text-2xl">Minhas categorias</h1>
      <div class="flex items-center justify-between mt-4">
        <input type="text" placeholder="pesquisar" class="input input-primary input-bordered mt-4 mb-4">
        <button class="btn btn-info">Adicionar</button>
      </div>
      
      <CategoriesList/>
      
      <div class="btn-group mt-4 flex justify-center">
        <button class="btn">Anterior</button> 
        <button class="btn">1</button> 
        <button class="btn btn-active">2</button> 
        <button class="btn">3</button> 
        <button class="btn">4</button> 
        <button class="btn">Proximo</button>
      </div>
      
    </div>
   
 </div>
  
</template>
<script>
// import TodoCard from '@/components/Todos/TodoCard';
import VsSubmenu from '@/modules/Sidebar/VsSubmenu';
// import PostsList from '@/modules/Posts/PostsList';
import CategoriesList from '@/modules/Categories/CategoriesList';
// import VSMain from '@/components/Main/VSMain';

export default {
  name: 'Home',
  
  components: {
    VsSubmenu, CategoriesList
  }
 
};
</script>
