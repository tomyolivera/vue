<template>
  <div>
    <v-toolbar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>FACER</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn :color="colores.login" to="/login">Login</v-btn>
      <v-btn :color="colores.registro" class="ma-3" to="/registro">Registrarse</v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" temporary dark>
      <v-layout mt-4 column align-center>
        <v-flex>
          <v-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg"></v-img>
          </v-avatar>
        </v-flex>
        <v-flex>
          <p class="headline white--text">Juan Perez</p>
        </v-flex>
        <v-flex>
          <v-btn :color="colores.home" light to="/">Home</v-btn>
        </v-flex><br>
        <v-flex>
          <v-btn :color="colores.productos" to="/productos">Productos</v-btn>
        </v-flex><br>
        <v-flex>
          <v-btn :color="colores.calendario" to="/micalendario">Mi calendario</v-btn>
        </v-flex><br>
        <v-flex>
          <v-btn :color="colores.dolar" to="/dolarhoy">Dolar hoy</v-btn>
        </v-flex><br>
      </v-layout>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    name: 'navBar',
    data: () => ({
      drawer: false,
      group: null,
    }),
    computed: {
      ...mapState(['colores'])
    }
  }
</script>