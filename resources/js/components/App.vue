<template>
  <v-app id="inspire">
    <nav-block></nav-block>
      <v-content>
        <v-container class="fill-height">
          <router-view></router-view>
        </v-container>
      </v-content>
    <footer-block></footer-block> 
  </v-app>
</template>

<script>
  export default {
    data: () => ({}),
    created() {
      if (localStorage.hasOwnProperty('token')){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
        this.$store.dispatch("state_change");

      }
    }
  }
</script>