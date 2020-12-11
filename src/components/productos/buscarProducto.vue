<template>
    <div class="my-3">
        <v-form>
            <v-text-field type="search" label="Buscar producto por nombre" v-model="productoABuscar"></v-text-field>
        </v-form>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    export default {
        name: 'buscarProducto',
        data: () => ({
            productoABuscar: '',
            productosEncontrados: []
        }),
        computed: {
            ...mapState(['productos'])
        },
        methods: {
            
        }
    }
</script>