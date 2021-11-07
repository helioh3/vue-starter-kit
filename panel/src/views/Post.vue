<template>
 <div id="" class="flex flex-auto">
    <div class="w-64 bg-gray-100 p-4 flex-col space-y-4 ">
      <div class="flex flex-row justify-between items-center mb-4">
        <h1 class="font-semibold text-2xl">Noticias</h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>

      <!-- conteudo submenu -->
      <ul class="menu p-2 rounded-box">
        <li>
          <RouterLink :to="{name: 'post'}" :class="{'bg-gray-100 ': $route.name === 'post',}">Noticias </RouterLink>
        </li>
        <li>
          <RouterLink :to="{name: 'post'}" :class="{'bg-gray-100 ': $route.name === 'post',}">Categorias </RouterLink>
        </li>
        <li>
          <RouterLink :to="{name: 'post'}" :class="{'bg-gray-100 ': $route.name === 'post',}">Secretarias </RouterLink>
        </li>
      </ul>
    </div>
    
    <div class="flex-auto bg-white border rounded-tl-xl rounded-bl-lg shadow-xl p-4">
      <h1 class="font-semibold text-2xl">Minhas Postagens</h1>
      <div class="flex items-center justify-between mt-4">
        <input type="text" placeholder="pesquisar" class="input input-primary input-bordered mt-4 mb-4">
        <button class="btn btn-info">Adicionar</button>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full table-compact">
          <thead>
            <tr>
              <th>capa</th>
              <th>Titulo</th> 
              <th>Secretaria</th> 
              <th>Categoria</th> 
              <th>Data</th>
              <td>Ações</td>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <td>image</td>
              <td>Quality Control Specialist</td> 
              <td>Littel, Schaden and Vandervort</td> 
              <td>Canada</td> 
              <td>12/16/2020</td>
              <td class="flex flex-row">
                <a href="" class="pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
               <a href="" class="pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
               </a>
               <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
               </a>

              </td>
              
            </tr>
            <tr>
              <td>image</td>
              <td>Quality Control Specialist</td> 
              <td>Littel, Schaden and Vandervort</td> 
              <td>Canada</td> 
              <td>12/16/2020</td>
              <td class="flex flex-row">
                <a href="" class="pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>
               <a href="" class="pr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
               </a>
               <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
               </a>

              </td>
              
            </tr>
           
            
          </tbody> 
          <tfoot>
            <tr>
              <td></td>
              <th></th> 
              <th></th> 
              <th></th> 
             
              <th></th> 
              <th></th>
            </tr>
          </tfoot>
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
import VsSubmenu from '@/components/Sidebar/VsSubmenu';
// import VSMain from '@/components/Main/VSMain';

export default {
  name: 'Home',
  
  components: {
    // VsSubmenu
  }
 
};
</script>
