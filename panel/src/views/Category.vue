<template>
  <div class="box">
    <h1 class="mt-4 ml-2 text-2xl">Categorias</h1>
    <div class="text-sm breadcrumbs m-2">
      <ul>
        <li>
          <a>Dashboard</a>
        </li>

        <li>Home</li>
      </ul>
    </div>

    <div class="container p-2">
      <div class="overflow-x-auto">
        <div class="action mb-4 flex flex-grow">
          <div class="header">
          <h1>Listagem</h1>
        </div>
          <select class="select select-bordered max-w-xs m-1">
            <option disabled="disabled" selected="selected">Data</option> 
            <option>telekinesis</option> 
            <option>time travel</option> 
            <option>invisibility</option>
          </select>
          <select class="select select-bordered w-full max-w-xs m-1">
            <option disabled="disabled" selected="selected">Choose your superpower</option> 
            <option>telekinesis</option> 
            <option>time travel</option> 
            <option>invisibility</option>
          </select>
        </div>
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <th>5</th>
              <td>Yancy Tear</td>
              <td>Community Outreach Specialist</td>
              <td>Indigo</td>
            </tr>
            <tr class="">
              <th>6</th>
              <td>Irma Vasilik</td>
              <td>Editor</td>
              <td>Purple</td>
            </tr>
            <tr>
              <th>7</th>
              <td>Meghann Durtnal</td>
              <td>Staff Accountant IV</td>
              <td>Yellow</td>
            </tr>
            <tr class="">
              <th>8</th>
              <td>Sammy Seston</td>
              <td>Accountant I</td>
              <td>Crimson</td>
            </tr>
          </tbody>
        </table>

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
  </div>
</template>
<script>
export default {
  name: "Home",

  components: {},
};
</script>
