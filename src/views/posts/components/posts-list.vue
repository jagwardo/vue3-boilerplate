<template>
  <div class="block text-center max-w-2xl mx-auto">
      <ag-grid-vue
          class="ag-theme-alpine"
          :columnDefs="columnDefs"
          :rowData="rowData"
          rowSelection="multiple">
      </ag-grid-vue>
  </div>
</template>

<script lang="ts">
import { AgGridVue } from "ag-grid-vue";
export default {
    name: 'SinglePost',
    components: {
      AgGridVue
    },
    props: {
        count: Number,
        posts: [],
        columnDefs: [],
        rowData: []
    },
    beforeMount() {

    }

}
</script>
