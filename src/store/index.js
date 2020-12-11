import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productos: [],
    colores: {
      home: 'warning',
      registro: 'info',
      login: 'success',
      productos: 'cyan',
      calendario: 'purple',
      dolar: 'green',
    },
    loading: {
      mensaje: '',
      color: 'secondary',
      estado: false,
    },
    errores: [],
  },
  mutations: {
    guardarProductos(state){
      localStorage.setItem('productos', JSON.stringify(state.productos));
    },
    obtenerProductos(state){
      state.productos = JSON.parse(localStorage.getItem('productos'));
    },
    mostrarLoading(state, payload){
      state.loading.mensaje = payload.mensaje;
      state.loading.color = payload.color;
      state.loading.estado = true;
    },
    ocultarLoading(state){
      state.loading.estado = false;
    },
  },
  actions: {
  },
  modules: {
  },
})
