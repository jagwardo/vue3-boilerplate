<template>
  <div class="block text-center mx-auto">
      <h1>{{ count }}</h1>
      <ag-grid-vue
          class="ag-theme-alpine h-96"
          :columnDefs="columnDefs"
          :rowData="rowData"
          rowSelection="multiple">
      </ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { AgGridVue } from 'ag-grid-vue3';
export default {
    name: 'PostsList',
    components: {
      AgGridVue
    },
    props: {
        columnDefs: [],
        rowData: [],
        count: Number
    },
}
</script>
