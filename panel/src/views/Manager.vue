<template>
 <div id="" class="flex flex-auto">
    <div class="w-64 bg-gray-100 p-4 flex-col space-y-4 ">
      <div class="flex flex-row justify-between items-center mb-4">
        <h1 class="font-semibold text-1xl">Equipe de Gestão</h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </div>

      <!-- conteudo submenu -->
      <ul class="menu p-2 rounded-box">
        <li>
          <RouterLink class="p-0" :to="{name: 'post'}" :class="{'bg-gray-100 ': $route.name === 'post',}">Prefeitos</RouterLink>
        </li>
        <li>
          <RouterLink :to="{name: 'post'}" :class="{'bg-gray-100 ': $route.name === 'post',}">Secretários </RouterLink>
        </li>
        
      </ul>
    </div>
    
    <div class="flex-auto bg-white border rounded-tl-xl rounded-bl-lg shadow-xl p-4">
      <h1 class="font-semibold text-2xl">Lista</h1>
      <div class="flex items-center justify-between mt-4">
        <input type="text" placeholder="pesquisar" class="input input-primary input-bordered mt-4 mb-4">
        <button class="btn btn-info">Adicionar</button>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full p-4">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th> 
              <th>Capa</th> 
              <th>Job</th> 
              <th>Favorite Color</th> 
              <th></th>
            </tr>
          </thead> 
          <tbody>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th> 
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component">
                    </div>
                  </div> 
                  <div>
                    <div class="font-bold">
                          Hart Hagerty
                        </div> 
                    <div class="text-sm opacity-50">
                          United States
                        </div>
                  </div>
                </div>
              </td> 
              <td>
                  Zemlak, Daniel and Leannon
                  
                <br> 
                <span class="badge badge-outline badge-sm">Desktop Support Technician</span>
              </td> 
              <td>Purple</td> 
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th> 
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img src="/tailwind-css-component-profile-3@56w.png" alt="Avatar Tailwind CSS Component">
                    </div>
                  </div> 
                  <div>
                    <div class="font-bold">
                          Brice Swyre
                        </div> 
                    <div class="text-sm opacity-50">
                          China
                        </div>
                  </div>
                </div>
              </td> 
              <td>
                  Carroll Group
                  
                <br> 
                <span class="badge badge-outline badge-sm">Tax Accountant</span>
              </td> 
              <td>Red</td> 
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th> 
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img src="/tailwind-css-component-profile-4@56w.png" alt="Avatar Tailwind CSS Component">
                    </div>
                  </div> 
                  <div>
                    <div class="font-bold">
                          Marjy Ferencz
                        </div> 
                    <div class="text-sm opacity-50">
                          Russia
                        </div>
                  </div>
                </div>
              </td> 
              <td>
                  Rowe-Schoen
                  
                <br> 
                <span class="badge badge-outline badge-sm">Office Assistant I</span>
              </td> 
              <td>Crimson</td> 
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox">
                </label>
              </th> 
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img src="/tailwind-css-component-profile-5@56w.png" alt="Avatar Tailwind CSS Component">
                    </div>
                  </div> 
                  <div>
                    <div class="font-bold">
                          Yancy Tear
                        </div> 
                    <div class="text-sm opacity-50">
                          Brazil
                        </div>
                  </div>
                </div>
              </td> 
              <td>
                  Wyman-Ledner
                  
                <br> 
                <span class="badge badge-outline badge-sm">Community Outreach Specialist</span>
              </td> 
              <td>Indigo</td> 
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody> 
          <tfoot>
            <tr>
              <th></th> 
              <th>Name</th> 
              <th>Job</th> 
              <th>Favorite Color</th> 
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
