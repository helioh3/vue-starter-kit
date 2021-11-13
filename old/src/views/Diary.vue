<template>
 <div id="" class="flex flex-auto">
    <div class="w-64 bg-gray-100 p-4 flex-col space-y-4 ">
      <div class="flex flex-row justify-between items-center mb-4">
        <h1 class="font-semibold text-2xl">Lista de Diários</h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>

      <!-- conteudo submenu -->
      <ul class="menu p-2 rounded-box">
        <li>
          <RouterLink :to="{name: 'post'}" :class="{'bg-gray-100 ': $route.name === 'post',}">Novo</RouterLink>
        </li>
       
        
      </ul>
    </div>
    
    <div class="flex-auto bg-white border rounded-tl-xl rounded-bl-lg shadow-xl p-4">
      <h1 class="font-semibold text-2xl">Listagens</h1>
      <div class="flex items-center justify-between mt-4">
        <input type="text" placeholder="pesquisar" class="input input-primary input-bordered mt-4 mb-4">
        <button class="btn btn-info">Adicionar</button>
      </div>
      <div class="overflow-x-auto h-3/5">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th> 
              <th>Titulo</th> 
              <th>Data</th> 
              <th>Ações</th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <th>1</th> 
              <td>Diário Oficial
                <br> 
                  <span class="badge badge-outline badge-sm">Edição 223</span>
              </td> 
              <td>19/01/2021</td>
              <td>
                <button class="btn btn-square btn-sm mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">   
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                  </svg>
                </button>
                <button class="btn btn-square btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">   
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                  </svg>
                </button>
              </td>
            </tr>
            <tr>
              <th>1</th> 
              <td>Diário Oficial
                <br> 
                  <span class="badge badge-outline badge-sm">Edição 223</span>
              </td> 
              <td>19/01/2021</td>
              <td>
                <button class="btn btn-square btn-sm mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">   
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                  </svg>
                </button>
                <button class="btn btn-square btn-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-4 h-4 stroke-current">   
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>                       
                  </svg>
                </button>
              </td>
            </tr>
            
          </tbody>
        </table>

      </div>
      
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
// import VSMain from '@/components/Main/VSMain';

export default {
  name: 'Home',
  
  components: {
    // VsSubmenu
  }
 
};
</script>
