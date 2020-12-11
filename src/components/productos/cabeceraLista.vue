<template>
    <div>
        <v-card class="px-3 d-flex justify-space-between align-center" dark>
            <agregar-producto></agregar-producto>
            <span v-if="productos.length" class="yellow--text">
                Cantidad de productos: {{productos.length}}
            </span>
            <span v-if="productos.length == 0" class="red--text">
                No hay productos !
            </span>
            <buscar-producto></buscar-producto>
        </v-card>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import agregarProducto from './agregarProducto.vue';
    import buscarProducto from './buscarProducto.vue';
    import listaProductos from './listaProductos.vue';

    export default {
        components: { agregarProducto, buscarProducto, listaProductos },
        name: 'cabeceraLista',
        computed: {
            ...mapState(['productos'])
        }
    }
</script>