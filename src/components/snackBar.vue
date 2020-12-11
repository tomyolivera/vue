<template>
  <v-snackbar v-model="snackbar">{{mensaje}}</v-snackbar>
</template>

<script>
export default {
    name: 'snackBar',
    data() {
        return {
            snackbar: false,
            mensaje: ''
        }
    },
    methods: {
        mostrarMensaje(mensaje){
            this.snackbar = true;
            this.mensaje = mensaje;
        }
    }
}
</script>

<style>

</style>