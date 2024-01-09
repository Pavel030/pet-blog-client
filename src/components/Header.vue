<script lang="js">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header",
  data(){
    return {

    }
  }
})
</script>

<template>
  <div class="h-field">
    <div class="h-menu">
      <router-link class="h-link" to="/post">Posts</router-link>
      <router-link class="h-link" to="/questios">Authors questions</router-link>
    </div>
  </div>
</template>
