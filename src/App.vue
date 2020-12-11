<template>
  <v-app>
    <v-content>

      <nav-bar></nav-bar>

      <router-view></router-view>

      <loading></loading>

    </v-content>
  </v-app>
</template>

<script>
  import navBar from '@/components/navBar.vue';
  import loading from '@/components/loading.vue';

  export default {
    components: { navBar, loading },
    name: 'App',
  };
</script>
