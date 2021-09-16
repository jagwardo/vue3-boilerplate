<template>
  <div class="posts text-center">
    <PostsList v-bind:columnDefs="columnDefs" v-bind:rowData="rowData" />
  </div>
</template>

<script lang="ts">
import PostsList from './components/posts-list.vue';
export default {
    name: 'Posts',
    components: {
      PostsList,
    },
    data() {
        return {
          columnDefs: [
              { field: 'make' },
              { field: 'model' },
              { field: 'price' }
          ],
          rowData: [
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Porsche', model: 'Boxter', price: 72000 }
          ]
        }
    },
//   beforeMount() {

//     // this.rowData = [
//     //     { id: 'Toyota', title: 'Celica', userId: 35000 },
//     //     { id: 'Ford', title: 'Mondeo', userId: 32000 },
//     //     { id: 'Porsche', title: 'Boxter', userId: 72000 }
//     // ];    
//   //   fetch('https://www.ag-grid.com/example-assets/small-row-data.json')
//   //       .then(result => result.json())
//   //       .then(rowData => this.rowData = rowData);
//   // }
}
</script>
